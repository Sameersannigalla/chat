import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_eXL25PRxUYzama-fy_8w_hbvZR8-eRU",
  authDomain: "chat-41c8a.firebaseapp.com",
  projectId: "chat-41c8a",
  storageBucket: "chat-41c8a.appspot.com",
  messagingSenderId: "611491416547",
  appId: "1:611491416547:web:1ec9c6c010a90d7956f8d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()