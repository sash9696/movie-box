import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBN5mDSm_RZiqBp4X2iT7OwohsyaVlkySk",
    authDomain: "movie-box22.firebaseapp.com",
    projectId: "movie-box22",
    storageBucket: "movie-box22.appspot.com",
    messagingSenderId: "657759965387",
    appId: "1:657759965387:web:0d2c4166a196aeb75f0b4e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebaseApp.auth();
  
  export {auth};
  export default db;