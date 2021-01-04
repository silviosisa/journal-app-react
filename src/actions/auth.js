import {types} from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebase-config";

export const startLoginEmailPassword = (email, password) => {
    return ( dispatch ) =>{
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

export const starGoogleLogin = () => {
        return ( dispatch) => {
            firebase.auth().signInWithPopup( googleAuthProvider)
                .then( ({user}) => {
                    dispatch(
                       login( user.uid, user.displayName)
                   )
                })
        }
}