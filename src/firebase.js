import firebase from "firebase/app";
import "firebase/auth";

export const auth=firebase.initializeApp({
        apiKey: "AIzaSyCMsyWhnQ06PDcrD91NyoQ7K4AOFFSXHdI",
        authDomain: "chatters-spot.firebaseapp.com",
        projectId: "chatters-spot",
        storageBucket: "chatters-spot.appspot.com",
        messagingSenderId: "20849783574",
        appId: "1:20849783574:web:d3c4ace6d22ee9b934d637"
    }).auth();