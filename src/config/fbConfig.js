import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAAlwXVmIBTNoVwXAEOSLwyLIDiGkwKwB4",
  authDomain: "react-firebase-app-e5e9f.firebaseapp.com",
  databaseURL: "https://react-firebase-app-e5e9f.firebaseio.com",
  projectId: "react-firebase-app-e5e9f",
  storageBucket: "react-firebase-app-e5e9f.appspot.com",
  messagingSenderId: "999352626157",
  appId: "1:999352626157:web:a4a902702d7e82b749d5e4",
  measurementId: "G-P2083LQ9V9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase