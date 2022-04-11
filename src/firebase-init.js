// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK8aCa1-cbVS2shLrofTJuf3PV9VbYQq0",
    authDomain: "email-password-authentic-57cd9.firebaseapp.com",
    projectId: "email-password-authentic-57cd9",
    storageBucket: "email-password-authentic-57cd9.appspot.com",
    messagingSenderId: "136855266107",
    appId: "1:136855266107:web:db59b5908015732ffb0d1e",
    measurementId: "G-6GS1263KJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;