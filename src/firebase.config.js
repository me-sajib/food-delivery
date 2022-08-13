import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqa7cJGAkhzn6eBgtUKfiVYjPkX2RIBi4",
  authDomain: "food-delivery-b6652.firebaseapp.com",
  projectId: "food-delivery-b6652",
  storageBucket: "food-delivery-b6652.appspot.com",
  messagingSenderId: "1034322132427",
  appId: "1:1034322132427:web:806a7d08528665acca4a4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
