import {types} from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebase-config";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(email, password));
        }, 3000)
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
)

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