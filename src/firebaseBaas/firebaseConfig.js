import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

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
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectFirestore, projectStorage, timestamp};

  export default firebaseConfig;