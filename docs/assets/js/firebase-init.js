// Initialize Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, get, set, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAZoL7FPJ8wBqz_sX81Fo5eKXpsOVrLUZ0",
  authDomain: "tether-71e0c.firebaseapp.com",
  databaseURL: "https://tether-71e0c-default-rtdb.firebaseio.com",
  projectId: "tether-71e0c",
  storageBucket: "tether-71e0c.firebasestorage.app",
  messagingSenderId: "277809008742",
  appId: "1:277809008742:web:2586a2b821d8da8f969da7",
  measurementId: "G-X7ZQ6DJYEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export database for other scripts
export { db, ref, get, set, remove };
