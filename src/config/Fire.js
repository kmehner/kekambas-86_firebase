import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyByeTRkqyqM5a51ExJBIzL3wx2kKLabO4w",
    authDomain: "kekambas-86-auth-bs.firebaseapp.com",
    projectId: "kekambas-86-auth-bs",
    storageBucket: "kekambas-86-auth-bs.appspot.com",
    messagingSenderId: "180460940615",
    appId: "1:180460940615:web:cc1a100057f640fad13062"
};

const fire = initializeApp(firebaseConfig);
export default fire;
