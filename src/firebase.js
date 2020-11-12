import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfNeOHTXaHu_c2IK91aX1eXTF4Ngp-TiA",
  authDomain: "nwitter-8a0e9.firebaseapp.com",
  databaseURL: "https://nwitter-8a0e9.firebaseio.com",
  projectId: "nwitter-8a0e9",
  storageBucket: "nwitter-8a0e9.appspot.com",
  messagingSenderId: "130812434743",
  appId: "1:130812434743:web:0d7c9f124792d17260a2b2"
};

export default firebase.initializeApp(firebaseConfig);