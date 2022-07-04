import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLoWCTb2l5E065dlbW35yjtUyM7Myyf00",
  authDomain: "jiit-project-portal.firebaseapp.com",
  projectId: "jiit-project-portal",
  storageBucket: "jiit-project-portal.appspot.com",
  messagingSenderId: "514141375612",
  appId: "1:514141375612:web:5454d02c51f59e365fcdf9"
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export {storage , firebase as default};
