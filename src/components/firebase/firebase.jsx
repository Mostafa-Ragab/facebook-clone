import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAhfXPN4As7ABKpQwQv0eJj6XF3c_eCb70",
    authDomain: "facebook-clone-a367a.firebaseapp.com",
    databaseURL: "https://facebook-clone-a367a.firebaseio.com",
    projectId: "facebook-clone-a367a",
    storageBucket: "facebook-clone-a367a.appspot.com",
    messagingSenderId: "1085991472104",
    appId: "1:1085991472104:web:acc1ac258230be75b3325d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;