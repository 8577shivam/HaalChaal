import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZHYT_01oA4THEDeuAXp9lOtTuIqVmWAs",
  authDomain: "chat-4eb9f.firebaseapp.com",
  projectId: "chat-4eb9f",
  storageBucket: "chat-4eb9f.appspot.com",
  messagingSenderId: "841245642719",
  appId: "1:841245642719:web:27e9f739e0d22c9b5ebe6a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
