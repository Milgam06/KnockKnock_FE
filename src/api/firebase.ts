import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  setPersistence,
  browserSessionPersistence,
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

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

export interface CurrentUserData {
  nickname: string;
  email: string;
  isValid: boolean;
}

export const onSignUp = async (
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
    throw error;
  }
};

export const onSignIn = async (email: string, password: string) => {
  try {
    const oldUserCreditial = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    await setPersistence(firebaseAuth, browserSessionPersistence);
    console.log("Successfully signed in:", oldUserCreditial.user.displayName);
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const onSignOut = async () => {
  try {
    await signOut(firebaseAuth);
    console.log("Successfully signed out");
  } catch (error) {
    console.error("signOut error: ", error);
  }
};

export const onGetUser = (): CurrentUserData => {
  const user = firebaseAuth.currentUser;
  if (user != null) {
    const nickname = user.displayName || "";
    const email = user.email || "";
    return { nickname, email, isValid: true };
  } else {
    console.log("NoUsers");
    return { nickname: "", email: "", isValid: false };
  }
};
