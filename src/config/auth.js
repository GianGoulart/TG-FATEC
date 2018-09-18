import {firebaseAuth, googleProvider, facebookProvider} from "./constants";

export function loginWithGoogle() {
    return firebaseAuth().signInWithRedirect(googleProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}


export function loginWithFace() {
    return firebaseAuth().signInWithRedirect(facebookProvider);
    //return authenticate(loginWithFirebase(googleProvider));
}

export function loginWithEmailAndPassword(email,senha){
    return firebaseAuth().signInWithEmailAndPassword(email,senha)
}


export function logout() {
    return firebaseAuth().signOut();
}

