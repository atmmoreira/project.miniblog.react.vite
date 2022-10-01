// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA7echoEmbu9SVcexmBFO1V5dXb8Q2gXBY',
  authDomain: 'miniblog-react-vite.firebaseapp.com',
  projectId: 'miniblog-react-vite',
  storageBucket: 'miniblog-react-vite.appspot.com',
  messagingSenderId: '153347983668',
  appId: '1:153347983668:web:58422b2c6723e917a2bd61',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Database
const database = getFirestore(app);
export { database };
