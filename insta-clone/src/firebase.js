import firebase from 'firebase';
const firebaseApp  = firebase.initializeApp({
  apiKey: "AIzaSyAEO5mxTBSbw67mp1HldbpdPWBAs2Fmthk",
  authDomain: "instagram-clone-86d8b.firebaseapp.com",
  databaseURL: "https://instagram-clone-86d8b.firebaseio.com",
  projectId: "instagram-clone-86d8b",
  storageBucket: "instagram-clone-86d8b.appspot.com",
  messagingSenderId: "861982388708",
  appId: "1:861982388708:web:e6486151a93f63cf0817f1",
  measurementId: "G-FSPG4Q6NGV"
  });

  const db =firebaseApp.firestore();
  const auth=firebase.auth();
  const storage = firebase.storage();
  export {db,auth,storage};