import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJKmdX-3IDpQqde24cSBgXuRCAUswEQvk",
    authDomain: "facebook-messenger-clone-f73fa.firebaseapp.com",
    projectId: "facebook-messenger-clone-f73fa",
    storageBucket: "facebook-messenger-clone-f73fa.appspot.com",
    messagingSenderId: "671065266388",
    appId: "1:671065266388:web:a996bb5b5739efbda80341",
    measurementId: "G-NH7HCVTL0D"
  });

const db = firebaseApp.firestore();

export default db;

