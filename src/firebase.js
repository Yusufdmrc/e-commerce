import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCZA5CCXTNCOjDDdeJdgMFLIn6Yyl3DfUU",
  authDomain: "fir-a297c.firebaseapp.com",
  projectId: "fir-a297c",
  storageBucket: "fir-a297c.appspot.com",
  messagingSenderId: "506686708203",
  appId: "1:506686708203:web:cb38625ec89d58dccae1ae",
  measurementId: "G-RLXQTMB4JR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
