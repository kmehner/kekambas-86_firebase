import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhvdw4-E8MNSAoO9WXos6H5aXiqcIEWSo",
  authDomain: "kekambus-86-auth-bs.firebaseapp.com",
  projectId: "kekambus-86-auth-bs",
  storageBucket: "kekambus-86-auth-bs.appspot.com",
  messagingSenderId: "181245161057",
  appId: "1:181245161057:web:298cdd720370e5ebb20420"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export default fire;
