// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3cJfJazM_XRPp3OXxqVUJ2_FvL-r6CX0",
    authDomain: "jsi09-c96a1.firebaseapp.com",
    databaseURL: "https://jsi09-c96a1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jsi09-c96a1",
    storageBucket: "jsi09-c96a1.appspot.com",
    messagingSenderId: "379290352027",
    appId: "1:379290352027:web:c914c0d259a677c145493e",
    measurementId: "G-XZCH1Q0EME"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);