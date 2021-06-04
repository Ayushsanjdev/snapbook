import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRmYoGD-BYdC27Bkf9e015U-fPhyqExBI",
    authDomain: "snapbook-4a9d7.firebaseapp.com",
    projectId: "snapbook-4a9d7",
    storageBucket: "snapbook-4a9d7.appspot.com",
    messagingSenderId: "333576524452",
    appId: "1:333576524452:web:f30160967731c80ca98c31"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  export default firebaseConfig;