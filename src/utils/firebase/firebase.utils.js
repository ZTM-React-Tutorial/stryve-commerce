// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxInFZ1lDrkC3siASaqbo8Lar3_cePT0s",
  authDomain: "stryve-clothing.firebaseapp.com",
  projectId: "stryve-clothing",
  storageBucket: "stryve-clothing.appspot.com",
  messagingSenderId: "693659453055",
  appId: "1:693659453055:web:1fd381554d998d900ca14a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// different providers available.
// const facebookProvider = new FacebookAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// this is a singleton object and is shared across the browser session.
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// redirect creates a new session or a page to allow users to login .
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// instance of collection database
export const db = getFirestore();

export const createUserFromAuth = async (userAuth, additionalInfo) => {
  // document reference, not the actual data.
  const userDocRef = doc(db, "users", userAuth.uid);
  // actual document and data
  const userSnapshot = await getDoc(userDocRef);
  // checks if data within the document exists or not.
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    let { displayName, email } = userAuth;
    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email: email,
        createdAt: new Date(),
        ...additionalInfo,
      });
    } catch (err) {
      console.log("Failed User Creation", err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
