import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyA708VlsZxWbJpZyr3I18uoI0BqCG1vJh0",
  authDomain: "todoist-clone-9e73d.firebaseapp.com",
  databaseURL: "https://todoist-clone-9e73d-default-rtdb.firebaseio.com",
  projectId: "todoist-clone-9e73d",
  storageBucket: "todoist-clone-9e73d.appspot.com",
  messagingSenderId: "404417281836",
  appId: "1:404417281836:web:3e7553df67a45ccfeaf689",
});

export { firebaseConfig as firebase };
