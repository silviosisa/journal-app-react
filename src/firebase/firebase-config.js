import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB6sF49u6PMyAS2Ch4v2NZHbGAZRybYkO8",
    authDomain: "react-app-cursos-70d4b.firebaseapp.com",
    projectId: "react-app-cursos-70d4b",
    storageBucket: "react-app-cursos-70d4b.appspot.com",
    messagingSenderId: "269522642506",
    appId: "1:269522642506:web:a50df8ee36aed60958a8b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}
