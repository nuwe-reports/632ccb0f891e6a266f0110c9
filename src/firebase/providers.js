import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
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

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoUrl} = resp.user;

        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        })

        return {
            ok:true,
            uid, photoUrl, email, displayName
        }
    } catch (error) {
        return { ok:false, errorMesssage:error.message}
    }
}

export const loginUserWithEmailAndPassword = async({email, password}) => {
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoUrl, displayName }= resp.user;

        return{
            ok:true,
            uid,displayName, photoUrl
        }
    } catch (error) {
        return { ok: false, errorMesssage:error.message}
    }
}

export const logoutFirebase = async()=> {
    return await FirebaseAuth.signOut();
}