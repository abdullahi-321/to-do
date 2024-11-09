import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyAdkP9rtBZ-CkLUCWeNZg92Crzukd3OR6c",
    authDomain: "first-project-fbbee.firebaseapp.com",
    projectId: "first-project-fbbee",
    storageBucket: "first-project-fbbee.firebasestorage.app",
    messagingSenderId: "657881282923",
    appId: "1:657881282923:web:b9b422fa160f7e8b9cb42e",
    measurementId: "G-HBE1PHBV7X",
  };
  const app = initializeApp(firebaseConfig);
  import {
    getDatabase,
    ref,
    child,
    get,
    set,
    update,
    remove,
  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
  const database = getDatabase();

  export{database, get, child, ref, set}