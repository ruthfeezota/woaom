import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'




const firebaseConfig = {
  apiKey: "AIzaSyBHqRoaaeAA33ShtcTE-4466R5bDkyEAlU",
  authDomain: "woaom-59f54.firebaseapp.com",
  projectId: "woaom-59f54",
  storageBucket: "woaom-59f54.appspot.com",
  messagingSenderId: "554127958356",
  appId: "1:554127958356:web:c0bde1f82d1ff856c528c1",
  measurementId: "G-ZTXCZ62GZZ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth };