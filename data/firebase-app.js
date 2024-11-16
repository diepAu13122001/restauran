import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
// Import Firebase Authentication functions
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3cJfJazM_XRPp3OXxqVUJ2_FvL-r6CX0",
  authDomain: "jsi09-c96a1.firebaseapp.com",
  databaseURL: "https://jsi09-c96a1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsi09-c96a1",
  storageBucket: "jsi09-c96a1.firebasestorage.app",
  messagingSenderId: "379290352027",
  appId: "1:379290352027:web:c914c0d259a677c145493e",
  measurementId: "G-XZCH1Q0EME"
};


// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp); // Export Firebase Authentication
