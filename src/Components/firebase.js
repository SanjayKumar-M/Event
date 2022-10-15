import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDqegu5VFcbHHNSj_gwzfk5IiND3IIBXwg",
    authDomain: "event-f4b6c.firebaseapp.com",
    projectId: "event-f4b6c",
    storageBucket: "event-f4b6c.appspot.com",
    messagingSenderId: "289449101950",
    appId: "1:289449101950:web:b14ac3a96b126c914ee62f",
    measurementId: "G-6TMD3WYS0P"
  };
  

const app = initializeApp(firebaseConfig);




const database = getDatabase(app);
export default database;