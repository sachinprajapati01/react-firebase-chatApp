// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAMxQYagHSwwC6fYi3sPdcnQG95KxVAOao",
    authDomain: "sachin-f578e.firebaseapp.com",
    projectId: "sachin-f578e",
    storageBucket: "sachin-f578e.appspot.com",
    messagingSenderId: "27567446044",
    appId: "1:27567446044:web:dfd65e3b519edce2ab67d9",
    measurementId: "G-CXCT14DTRZ"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;