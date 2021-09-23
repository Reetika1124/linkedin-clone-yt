import firebase from 'firebase';

const firebaseConfig = {
   apiKey: "AIzaSyAUtdlfGgUuuHaYfTYnnBd8lNuqrTDcKXo",
   authDomain: "linkedin-clone-yt-f192b.firebaseapp.com",
   projectId: "linkedin-clone-yt-f192b",
   storageBucket: "linkedin-clone-yt-f192b.appspot.com",
   messagingSenderId: "68692389802",
   appId: "1:68692389802:web:c2dff413112eb523bbc5d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
