// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";
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
// similar to authentication object in spring.
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// redirect creates a new session or a page to allow users to login .
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// instance of collection database
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collecionKey,
  documentObjects
) => {
  // retrieve a collection ref , if not present create a new collection.
  const collectionRef = collection(db, collecionKey);
  // write batch --> manages transaction within batch calls.
  const batch = writeBatch(db);

  documentObjects.forEach((docObj) => {
    // get documet reference from db which is defined with the collection method.
    const docRef = doc(collectionRef, docObj.title.toLowerCase());
    // set to batch
    batch.set(docRef, docObj);
  });

  // batch commit
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  // contains an array of document snapshot.
  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};

export const createUserFromAuth = async (userAuth, additionalInfo) => {
  // document reference, not the actual data.
  const userDocRef = doc(db, "users", userAuth.uid);
  // actual document and data
  const userSnapshot = await getDoc(userDocRef);
  // checks if data within the document exists or not.
  // console.log(userSnapshot.exists());

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

export const signInAuthUserWithEmailAndPassowrd = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

// Observer pattern - state change listener
// Whenever authentication of the singleton auth changes invoke the callback function.
// sign in and sign out.
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

/*
 * onAuthStateChanges is a listener on an auth stream that registers
 * {
 * next: callback
 * error : 3 param
 * complete: 4 param
 * }
 *
 */
