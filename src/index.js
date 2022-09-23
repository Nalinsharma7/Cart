import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import 'firebase/firestore';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUwZ0TZHhhpsXfitZTAwMY9kRhd4AEi1M",
    authDomain: "cart-fac6f.firebaseapp.com",
    projectId: "cart-fac6f",
    storageBucket: "cart-fac6f.appspot.com",
    messagingSenderId: "783241853769",
    appId: "1:783241853769:web:7469bd172eb42ea4103898"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
