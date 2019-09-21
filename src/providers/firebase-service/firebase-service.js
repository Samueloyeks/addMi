// import React, { Component } from 'react';
// import firebase from 'firebase';


// export default class FirebaseService {
//     constructor() {
//         var config = {
//             apiKey: "AIzaSyBatsWUoLn6ScgDUzhnuakiVqW_my52ZD4",
//             authDomain: "addmi-fe3b5.firebaseapp.com",
//             databaseURL: "https://addmi-fe3b5.firebaseio.com",
//             projectId: "addmi-fe3b5",
//             storageBucket: "",
//             messagingSenderId: "918110733571",
//             appId: "1:918110733571:web:f1991f9c9b2d6ffd"
//         };
//         firebase.initializeApp(config);

//         this.auth = firebase.auth();
//         this.db = firebase.database();

//         this.googleProvider = new firebase.auth.GoogleAuthProvider();
//         this.facebookProvider = new firebase.auth.facebookProvider();
//     }

//     // *** Auth API ***

//     doCreateUserWithEmailAndPassword = (email, password) =>
//         this.auth.createUserWithEmailAndPassword(email, password);

//     doSignInWithEmailAndPassword = (email, password) =>
//         this.auth.signInWithEmailAndPassword(email, password);

//     doSignInWithGoogle = () =>
//         this.auth.signInWithPopup(this.googleProvider);

//     doSignInWithFacebook = () =>
//         // this.auth.signInWithPopup(this.facebookProvider);
//         alert('it shows')

//     doSignOut = () => this.auth.signOut();

// }
