import { firebaseAuth, createUserWithEmailAndPassword } from "./firebase";

// export const registerUser = async (email: string, userId: string, password: string) => {
//     try {
//         const createUser = await createUserWithEmailAndPassword(firebaseAuth, email, password);
//         const user = User | null = createUser.user;
//         await createUser.user?.updateProfile({displayName: userId,});
//     }
// }
