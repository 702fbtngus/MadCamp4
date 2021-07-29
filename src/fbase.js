import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAk0BYw4jX7YjYKMjf268jY0H5iXrSIaqY",
    authDomain: "login-4682d.firebaseapp.com",
    projectId: "login-4682d",
    storageBucket: "login-4682d.appspot.com",
    messagingSenderId: "500479779177",
    appId: "1:500479779177:web:88ec19eb1bf93ee33e1df8",
    measurementId: "G-5X2RCJL921"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const firestore = firebase.firestore();