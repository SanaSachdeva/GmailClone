import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuNJE9RJ4yzdHPQ0dGQdpTOblzVTatPpI",
  authDomain: "clone-928e3.firebaseapp.com",
  projectId: "clone-928e3",
  storageBucket: "clone-928e3.firebasestorage.app",
  messagingSenderId: "271218007751",
  appId: "1:271218007751:web:de44ae76a1bd43208328e2",
  measurementId: "G-5YMEYS023L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();


// //service cloud.firestore {
//   match /databases/{database}/documents {
//     match /emails/{emailId} {
//       // Allow authenticated users to create documents
//       allow create: if request.auth != null;
//       allow read, update, delete: if request.auth != null && request.auth.uid == resource.data.userId;
//     }
//   }
// }
