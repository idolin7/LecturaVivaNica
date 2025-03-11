import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCBWTYaJ1BJCQuv3DwmX1BWfVimzOBmoh4",
    authDomain: "lecturavivanica-6ccb5.firebaseapp.com",
    projectId: "lecturavivanica-6ccb5",
    storageBucket: "lecturavivanica-6ccb5.firebasestorage.app",
    messagingSenderId: "509434510",
    appId: "1:509434510:web:65a5caa8d28610c49687df",
    measurementId: "G-N6KDQV1T74"
  };

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

const db = getFirestore(appfirebase);


const auth = getAuth(appfirebase);

export {db, auth};