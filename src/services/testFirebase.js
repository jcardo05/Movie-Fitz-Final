import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {} from "firebase/firebase-auth-compat"
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const firebaseConfig = {
    apiKey: "AIzaSyAcHNY4jTrmNOB8IZEuN7N6Opk1LqE2SWs",
    authDomain: "movierecommend-aa0cd.firebaseapp.com",
    databaseURL: "https://movierecommend-aa0cd-default-rtdb.firebaseio.com",
    projectId: "movierecommend-aa0cd",
    storageBucket: "movierecommend-aa0cd.appspot.com",
    messagingSenderId: "1071634799655",
    appId: "1:1071634799655:web:3b7914471f57fc74e18202",
    measurementId: "G-D5YJFELNFK"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

