import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = 
{
  apiKey: "AIzaSyDp3j-DVS8WGkwnvxGJQ0d6RtNIDb04pvs",
  authDomain: "meradigi.firebaseapp.com",
  databaseURL: "https://meradigi-default-rtdb.firebaseio.com",
  projectId: "meradigi",
  storageBucket: "meradigi.appspot.com",
  messagingSenderId: "441347946040",
  appId: "1:441347946040:web:92e87fcb11c087769898cd",
  measurementId: "G-67MBF3ERHD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
