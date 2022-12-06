// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyd08xUAPLQDNNSaZOw182f_IpQ-iTT-c",
  authDomain: "twitter-app-3c7fd.firebaseapp.com",
  projectId: "twitter-app-3c7fd",
  storageBucket: "twitter-app-3c7fd.appspot.com",
  messagingSenderId: "550685824220",
  appId: "1:550685824220:web:4e1e7c2e2323cc223f5019"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };