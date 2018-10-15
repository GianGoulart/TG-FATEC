import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAGj1l9vnf-YMVXyacd8qak8oANVI6KlwU",
  authDomain: "footballmanager-47f29.firebaseapp.com",
  databaseURL: "https://footballmanager-47f29.firebaseio.com",
  projectId: "footballmanager-47f29",
  storageBucket: "footballmanager-47f29.appspot.com",
  messagingSenderId: "417757483165"
};
firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const firebaseAuth = firebase.auth;