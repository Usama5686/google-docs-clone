import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDQ6-2J_j24BLbMSpeewbUsin9Mc0U-pBU",
  authDomain: "docs-clone-94017.firebaseapp.com",
  projectId: "docs-clone-94017",
  storageBucket: "docs-clone-94017.appspot.com",
  messagingSenderId: "565800001429",
  appId: "1:565800001429:web:bf58988270f21f9e5b209c",
  measurementId: "G-458M3K4LRR",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export { db };
