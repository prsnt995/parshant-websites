import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  description: string;
}

/**
 * Save contact inquiry to Firebase Firestore using REST API for instant execution
 */
export async function saveContactSubmission(data: ContactSubmission) {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "noeul-970ff";
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "";
  const collectionName = process.env.NEXT_PUBLIC_FIREBASE_COLLECTION || "noeul connect";

  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${encodeURIComponent(collectionName)}?key=${apiKey}`;

  const payload = {
    fields: {
      name: { stringValue: data.name },
      email: { stringValue: data.email },
      phone: { stringValue: data.phone || "" },
      projectType: { stringValue: data.projectType },
      description: { stringValue: data.description },
      source: { stringValue: "website_contact_form" },
      createdAt: { timestampValue: new Date().toISOString() },
    },
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (res.ok) {
      const docName = result.name ? result.name.split("/").pop() : "success";
      return { success: true, id: docName };
    }

    if (res.status === 403 || (result.error && result.error.status === "PERMISSION_DENIED")) {
      return {
        success: false,
        error: "Firestore PERMISSION_DENIED: Security rules in Firebase Console are locking write access to 'noeul connect' collection.",
        isPermissionDenied: true,
      };
    }

    return {
      success: false,
      error: result.error?.message || "Failed to save submission to Firestore.",
    };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Error connecting to Firebase REST API";
    console.error("Error in Firestore REST save:", error);
    return { success: false, error: errMessage };
  }
}

export { app, db };
