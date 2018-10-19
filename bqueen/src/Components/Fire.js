import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAIdxFCF9PhOOEEPd1Mful2LXSgkliMBvs",
    authDomain: "bqueen-7c5b2.firebaseapp.com",
    databaseURL: "https://bqueen-7c5b2.firebaseio.com",
    projectId: "bqueen-7c5b2",
    storageBucket: "bqueen-7c5b2.appspot.com",
    messagingSenderId: "989574352784"
  };
 const fire = firebase.initializeApp(config);
 export default fire;