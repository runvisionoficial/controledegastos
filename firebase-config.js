
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAWZbFnlpeSfu2pKur8Y_1m9pHx-ecsGGM",
  authDomain: "controledegastos-1020.firebaseapp.com",
  projectId: "controledegastos-1020",
  storageBucket: "controledegastos-1020.firebasestorage.app",
  messagingSenderId: "1044434117100",
  appId: "1:1044434117100:web:fc932c88938db0b63120c9"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export { firebaseConfig };
