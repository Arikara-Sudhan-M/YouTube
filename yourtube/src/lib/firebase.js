// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDHldT4gTClXp3UQ4Noz_ewjLFOOdQvO_Y",
  authDomain: "yourtube-1c629.firebaseapp.com",
  projectId: "yourtube-1c629",
  storageBucket: "yourtube-1c629.appspot.com", // ✅ corrected
  messagingSenderId: "460806004012",
  appId: "1:460806004012:web:6fee4436c1d46456caa089",
  measurementId: "G-EEB687KJB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

// ✅ Correctly export these
export { auth, provider, analytics };
