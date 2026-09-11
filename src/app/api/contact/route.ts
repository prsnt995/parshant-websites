import { NextResponse } from "next/server";
import { saveContactSubmission } from "@/lib/firebase";
import { sendContactNotificationEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { success: false, error: "Name, email, and description are required fields." },
        { status: 400 }
      );
    }

    // 1. Save to Firebase Firestore collection 'noeul connect'
    const firebaseResult = await saveContactSubmission({
      name,
      email,
      phone: phone || "",
      projectType: projectType || "Other",
      description,
    });

    // 2. Trigger email notification to owner
    const emailResult = await sendContactNotificationEmail({
      name,
      email,
      phone: phone || "",
      projectType: projectType || "Other",
      description,
    });

    if (!emailResult.sent) {
      console.warn("[Contact API Warning] Email notification could not be sent:", emailResult.error);
    }

    if (!firebaseResult.success) {
      if (firebaseResult.isDatabaseNotFound) {
        console.warn("[Firestore Notice] Submission received, but Cloud Firestore database is not created yet in Firebase Console for project 'noeulenterprise'. Create it at https://console.cloud.google.com/datastore/setup?project=noeulenterprise");
      } else if (firebaseResult.isPermissionDenied) {
        console.warn("[Firestore Notice] Submission received, but Firestore security rules locked write permission.");
      } else {
        console.warn("[Firestore Notice] Submission received, but saving to Firestore failed:", firebaseResult.error);
      }
    }

    return NextResponse.json({
      success: true,
      emailSent: emailResult.sent,
      message: emailResult.sent 
        ? "Thank you! Your project request has been submitted and sent to our email." 
        : "Thank you! Your project request has been received.",
      id: firebaseResult.id || "received",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}

