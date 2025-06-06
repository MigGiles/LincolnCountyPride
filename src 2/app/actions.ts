
"use server";

import { db } from '@/lib/firebase';
import { collection, addDoc, Timestamp, query, where, getDocs } from 'firebase/firestore';

export async function handleMailingListSignup(email: string): Promise<{ success: boolean; message?: string }> {
  if (!email || !email.includes('@')) {
    return { success: false, message: "Invalid email address." };
  }

  try {
    const signupsCollection = collection(db, "mailing_list_signups");
    
    // Check if email already exists
    const q = query(signupsCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, message: "This email is already subscribed." };
    }

    // Add a new document with a generated id.
    await addDoc(signupsCollection, {
      email: email,
      subscribedAt: Timestamp.now()
    });
    console.log(`New mailing list signup: ${email} added to Firestore.`);
    return { success: true, message: "Successfully subscribed! Welcome to the community." };
  } catch (error) {
    console.error("Error adding document to Firestore: ", error);
    // Check for specific Firebase errors if needed, e.g., permission denied
    if (error instanceof Error && (error.message.includes('Missing or insufficient permissions') || error.message.includes('document parent is missing'))) {
         return { success: false, message: "Subscription failed: Server configuration error. Please ensure Firebase Firestore is correctly set up with appropriate permissions and database exists." };
    }
    return { success: false, message: "Could not subscribe due to a server error. Please try again later." };
  }
}
