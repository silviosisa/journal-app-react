import {types} from "../types/types";
import Swal from 'sweetalert2';
import {firebase, googleAuthProvider} from "../firebase/firebase-config";
import {uiFinishLoading, uiStartLoading} from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(uiStartLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                )

            }).catch( e => {
               console.log(e);
               dispatch(uiFinishLoading());
               Swal.fire()
        })
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
);

export const startLogout = () => {
    return async( dispatch ) => {
      await firebase.auth().signOut();

      dispatch( logout());
    }
}

export const logout = () => ({
    type: types.logout
})

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return async (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await user.updateProfile({displayName: name});
                console.log(user);
                dispatch(
                    login(user.uid, user.displayName)
                )
            }).catch( e => {
                console.log(e);
        })
    }
}

export const starGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
    }
}