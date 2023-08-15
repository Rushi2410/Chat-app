import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCED9eTnLMUOyCFHe3-f7JA2FoYBit9YLc",
  authDomain: "chat-d8f18.firebaseapp.com",
  projectId: "chat-d8f18",
  storageBucket: "chat-d8f18.appspot.com",
  messagingSenderId: "35773776006",
  appId: "1:35773776006:web:47fcd066cdb43f74485107"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
