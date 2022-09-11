// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAFLNIDEDhVeDfXFqqt8b988VKx3HxGAI",
  authDomain: "chitchat-4b98d.firebaseapp.com",
  projectId: "chitchat-4b98d",
  storageBucket: "chitchat-4b98d.appspot.com",
  messagingSenderId: "473696697607",
  appId: "1:473696697607:web:e49812e9da20a9b5d899a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)

export const db=getFirestore(app);

