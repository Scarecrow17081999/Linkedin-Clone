import React from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
};
export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    return error;
  }
};
export const GoogleSignInAPI = (email, password) => {
  try {
    let googleProvider = new GoogleAuthProvider(auth, email, password);
    let response = signInWithPopup(auth, googleProvider);
    return response;
  } catch (error) {
    return error;
  }
};
