import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "/////",
  authDomain: "event-f4b6c.firebaseapp.com",
  projectId: "event-f4b6c",
  storageBucket: "event-f4b6c.appspot.com",
  messagingSenderId: "289449101950",
  appId: "////",
  measurementId: "G-6TMD3WYS0P"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
