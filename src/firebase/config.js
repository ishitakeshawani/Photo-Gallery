import   firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyApXEUGyT70vFIjE_whwYGBuUo880M0k5g",
    authDomain: "photo-galary-f1bf4.firebaseapp.com",
    projectId: "photo-galary-f1bf4",
    storageBucket: "photo-galary-f1bf4.appspot.com",
    messagingSenderId: "438386137348",
    appId: "1:438386137348:web:b079a91f4431ebfb581851"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();


export { projectFirestore,projectStorage } ;
