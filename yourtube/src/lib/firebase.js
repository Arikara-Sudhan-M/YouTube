// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHldT4gTClXp3UQ4Noz_ewjLFOOdQvO_Y",
  authDomain: "yourtube-1c629.firebaseapp.com",
  projectId: "yourtube-1c629",
  storageBucket: "yourtube-1c629.firebasestorage.app",
  messagingSenderId: "460806004012",
  appId: "1:460806004012:web:6fee4436c1d46456caa089",
  measurementId: "G-EEB687KJB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
