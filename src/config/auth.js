import {firebaseAuth, googleProvider, facebookProvider} from "./constants";
import { browserHistory } from 'react-router';

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
}

export function loginWithFace() {
    return firebaseAuth().signInWithRedirect(facebookProvider);
}

export function loginWithEmailAndPassword(email,senha){
    console.log(email, senha)
    return firebaseAuth().signInWithEmailAndPassword(email,senha)
}

export function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("firebaseAuthInProgress");
    localStorage.removeItem("appToken");
    browserHistory.push("/login")
    return firebaseAuth().signOut();

}

