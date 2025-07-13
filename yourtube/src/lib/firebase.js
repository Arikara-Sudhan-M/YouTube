// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDHldT4gTClXp3UQ4Noz_ewjLFOOdQvO_Y",
  authDomain: "yourtube-1c629.firebaseapp.com",
  projectId: "yourtube-1c629",
  storageBucket: "yourtube-1c629.appspot.com", // ✅ fix here
  messagingSenderId: "460806004012",
  appId: "1:460806004012:web:6fee4436c1d46456caa089",
  measurementId: "G-EEB687KJB9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider, analytics };
