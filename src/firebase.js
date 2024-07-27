// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8VeMUnOzljLsg0ntgYZ8fp6JzTwqkIlw",
    authDomain: "my-new-app-4b78a.firebaseapp.com",
    projectId: "my-new-app-4b78a",
    storageBucket: "my-new-app-4b78a.appspot.com",
    messagingSenderId: "414411669575",
    appId: "1:414411669575:web:02cf26db463349fdd07162",
    measurementId: "G-YHZM2SQJJ4"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
