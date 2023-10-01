// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7t-mJwn8IRleCu6b67M4FYeGeUEF_MP0",
    authDomain: "user-email-password-auth-9f32d.firebaseapp.com",
    projectId: "user-email-password-auth-9f32d",
    storageBucket: "user-email-password-auth-9f32d.appspot.com",
    messagingSenderId: "346010707842",
    appId: "1:346010707842:web:681f963a078f48e034119b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;