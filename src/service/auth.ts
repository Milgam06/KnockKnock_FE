import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "./firebase";

export const signUp = async (
  email: string,
  userid: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: userid });
    console.log(
      "Successfully registered new user with UID:",
      userCredential.user.uid
    );
  } catch (error) {
    console.error("Error registering new user:", error);
  }
};
