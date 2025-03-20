// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDx0lEoDrem6qg29IzOiBbIg8Gp3QXNfVc",
    authDomain: "wemen-d9ec7.firebaseapp.com",
    projectId: "wemen-d9ec7",
    storageBucket: "wemen-d9ec7.firebasestorage.app",
    messagingSenderId: "30073696094",
    appId: "1:30073696094:web:c3334d1c719b9e5e2ea9cf",
    measurementId: "G-HK4252N6BF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Enable anonymous authentication
auth.useDeviceLanguage();

// Set persistence to local
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .catch((error) => {
        console.error("Firebase persistence error:", error);
    });

// Export services for use in other files
window.auth = auth;
window.db = db;
window.storage = storage;

/* 
// Modern modular SDK version (if needed in the future)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx0lEoDrem6qg29IzOiBbIg8Gp3QXNfVc",
  authDomain: "wemen-d9ec7.firebaseapp.com",
  projectId: "wemen-d9ec7",
  storageBucket: "wemen-d9ec7.firebasestorage.app",
  messagingSenderId: "30073696094",
  appId: "1:30073696094:web:c3334d1c719b9e5e2ea9cf",
  measurementId: "G-HK4252N6BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/