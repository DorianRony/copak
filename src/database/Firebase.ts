import {initializeApp} from "firebase/app";
import {getFirestore, collection, addDoc,getDoc,doc,deleteDoc,setDoc} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkfM2yk8Kipk0j1jv_G2bXFwIIx9I5Kcw",
    authDomain: "copak-cc7d8.firebaseapp.com",
    projectId: "copak-cc7d8",
    storageBucket: "copak-cc7d8.appspot.com",
    messagingSenderId: "793782488905",
    appId: "1:793782488905:web:857c88b840ac2f72ac1498",
    measurementId: "G-MFEW2Y6T17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const Firebase = () => {
    return {
        db,
        app
    }
}
