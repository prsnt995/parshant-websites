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
    await sendContactNotificationEmail({
      name,
      email,
      phone: phone || "",
      projectType: projectType || "Other",
      description,
    });

    if (!firebaseResult.success) {
      if (firebaseResult.isPermissionDenied) {
        console.warn("[Firestore Warning] Submission received but Firestore rules locked write permission.");
        return NextResponse.json({
          success: true,
          warning: "Project request received! Note: To save to Firestore database, publish rules in Firebase Console -> Firestore -> Rules tab (allow create: if true;).",
          id: "pending-rules",
        });
      }

      return NextResponse.json(
        { 
          success: false, 
          error: firebaseResult.error || "Failed to save submission to Firebase.",
          hint: "Please verify your Firebase environment variables in .env.local"
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project request submitted! Saved to Firebase and email notification sent.",
      id: firebaseResult.id,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
