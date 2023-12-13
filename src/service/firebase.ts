import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../atoms";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJET_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export const signUp = async (
  email: string,
  userid: string,
  password: string
) => {
  console.log("signUp");
  try {
    const newUserCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    await updateProfile(newUserCredential.user, { displayName: userid });
    console.log(
      "Successfully registered new user with UID:",
      newUserCredential.user.uid
    );
  } catch (error) {
    console.error("Error registering new user:", error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    await setPersistence(firebaseAuth, browserLocalPersistence);
    const oldUserCreditial = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    console.log("Successfully signed in:", oldUserCreditial.user.displayName);
  } catch (error) {
    console.error("Error signing in:", error);
    return error;
  }
};
