import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAfb0pZhI18KrTh_LJacxPmIFxB5L9pu6Q",
    authDomain: "todo-fe02e.firebaseapp.com",
    databaseURL: "https://todo-fe02e.firebaseio.com",
    projectId: "todo-fe02e",
    storageBucket: "todo-fe02e.appspot.com",
    messagingSenderId: "749336112690",
    appId: "1:749336112690:web:65842d93bc275f9263562b",
    measurementId: "G-ZRQ1NFPCKQ"
})

const db = firebaseApp.firestore();
export default db;