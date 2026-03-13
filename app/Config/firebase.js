import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbpZ9oXpJaqFcAeqrpMMX8PgNWYh_uRjs",
  authDomain: "project-575fed66-d830-4f54-9bb.firebaseapp.com",
  projectId: "project-575fed66-d830-4f54-9bb",
  storageBucket: "project-575fed66-d830-4f54-9bb.firebasestorage.app",
  messagingSenderId: "441228531997",
  appId: "1:441228531997:web:e70b91c4810c4d6bbae9f4",
  measurementId: "G-GHRH843K0E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);