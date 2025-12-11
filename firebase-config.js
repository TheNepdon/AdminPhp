// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
  𝐀𝐃𝐃 𝐘𝐎𝐔𝐑 𝐅𝐈𝐑𝐄𝐁𝐀𝐒𝐄 𝐒𝐃𝐊
const firebaseConfig = {
  apiKey: "AIzaSyCDfeb57uijRS4asH0Q_igPCsAXun5TFOw",
  authDomain: "nepdonmod.firebaseapp.com",
  databaseURL: "https://nepdonmod-default-rtdb.firebaseio.com",
  projectId: "nepdonmod",
  storageBucket: "nepdonmod.firebasestorage.app",
  messagingSenderId: "991217783038",
  appId: "1:991217783038:web:c4d31f26d9844a47f7d5af",
  measurementId: "G-BF048NS6JL"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };