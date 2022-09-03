import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithGoogle(FirebaseAuth, googleProvider);
        const  { displayName, email, photoUrl, uid } = result.user;

        return {
            ok:true,
            displayName,
            email,
            photoUrl,
            uid
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMesssage = error.message;

        return{
            ok: false,
            errorCode,
            errorMesssage
        }

    }
} 