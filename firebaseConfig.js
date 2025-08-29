
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQsof7UULVtVGtOpACsKdKCkiSiFEM_ac",
  authDomain: "goalproject-mgsl.firebaseapp.com",
  projectId: "goalproject-mgsl",
  storageBucket: "goalproject-mgsl.firebasestorage.app",
  messagingSenderId: "57028205452",
  appId: "1:57028205452:web:0ed59f94cd279c8e9c54a9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)