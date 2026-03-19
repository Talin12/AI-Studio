import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// In a real app, this would be your actual Firebase config.
// For this environment, we assume the config is provided via environment variables or a config file.
// Since we are in a sandboxed environment, we'll use a placeholder that will be replaced by the platform.

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "placeholder",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "placeholder",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "placeholder",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "placeholder",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "placeholder",
  appId: process.env.VITE_FIREBASE_APP_ID || "placeholder"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
