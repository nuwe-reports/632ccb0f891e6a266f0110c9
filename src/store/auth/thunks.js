import { loginUserWithEmailAndPassword, registerUserWithEmailPassword, logoutFirebase } from '../../firebase/providers';
import { clearCharactersLogout } from '../principal/characterSlice';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = ( email, password ) => {
    return async(disptach) => {
        disptach(checkingCredentials())
    }
}


export const startCreatingUserWithEmailPassword = ({email,password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid,  errorMessage } = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName,  email}))
    }
}

export const startLoadingWithEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginUserWithEmailAndPassword({email, password});

        if(!result.ok) return dispatch(logout(result));

        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(clearCharactersLogout());
        dispatch(logout());
    }
}