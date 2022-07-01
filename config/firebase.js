import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import Constants from "expo-constants";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCWbJ4FUbljnu9BSekgF7v5S4tt39rrml4",
    authDomain: "chatapp-96fe4.firebaseapp.com",
    projectId: "chatapp-96fe4",
    storageBucket: "chatapp-96fe4.appspot.com",
    messagingSenderId: "460847624665",
    appId: "1:460847624665:web:214f252bd4f88527eea9c8",
    measurementId: "G-HDQ8KG7R0H"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service (db)
export const db = getFirestore(app);

// Get a reference to the Firebase auth object
export const auth = getAuth();