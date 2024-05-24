import React from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

/* Creating a context object. */
export const authContext = createContext();

/**
 * UseAuth() is a function that returns the context object that was created by the useContext() hook.
 */
export const useAuth = () =>{
    const context = useContext(authContext)
    if(!context){
        console.log('error creating auth context')
    }
    return context;
};
/* make the context used global */
export function AuthProvider ({children}){

const register = async (email, password)=>{
 const response = await createUserWithEmailAndPassword (auth,email, password)
 console.log (response)
}

const login = async (email, password) =>{
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log (response)
}

const loginWithGoogle = async ()=> {
 const responseGoogle = new GoogleAuthProvider()
 return signInWithPopup(auth, responseGoogle)
}

const logout = async()=>{
 const response = await signOut(auth)
 console.log (response)
 /*try catch */
}

    return (
     <authContext.Provider value={{register, login, loginWithGoogle, logout}}>
        {children}
     </authContext.Provider>
     )
}