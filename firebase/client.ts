import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-6zeeoED0mW_MAZfgDCNpFh_iuKOhB7M",
  authDomain: "prepwise-1d9a9.firebaseapp.com",
  projectId: "prepwise-1d9a9",
  storageBucket: "prepwise-1d9a9.firebasestorage.app",
  messagingSenderId: "125434839199",
  appId: "1:125434839199:web:d527b93e478aa369e862aa",
  measurementId: "G-YMSG1KJR10"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);