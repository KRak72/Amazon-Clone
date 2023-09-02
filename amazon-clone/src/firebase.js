import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCkuPz7YBjzaMAsLQ8alk8OTTVZItAWFss",
  authDomain: "challenge-811f2.firebaseapp.com",
  projectId: "challenge-811f2",
  storageBucket: "challenge-811f2.appspot.com",
  messagingSenderId: "988968183882",
  appId: "1:988968183882:web:166ef0d8b24f13a5641eb3",
  measurementId: "G-5D5FRDE1L6"
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export const googleprovider = new GoogleAuthProvider();

const database = getDatabase(firebaseApp);

export {auth,database};