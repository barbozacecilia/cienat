import React from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

/* Creating a context object. */
export const AuthContext = createContext(null);

/**
 * UseAuth() is a function that returns the context object that was created by the useContext() hook.
 */
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        console.log('error creating auth context')
    }
    return context;
};
/* make the context used global */
export function AuthProvider({ children }) {

    const register = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                // Mostrar un mensaje al usuario indicando que el correo electrónico ya está en uso
                throw new Error('El correo electrónico ya está en uso. Por favor, usa otro correo electrónico.');
            } else {
                console.error('Error al registrar:', error.message);
                // Manejar otros errores de autenticación de Firebase
                throw error
            }
        }
    }



    const loginUser = async (email, password) => {

        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log("User logged in Successfully");
        } catch (error) {
            console.log("error", error)
        }
    }

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider()
        return await signInWithPopup(auth, responseGoogle)
    }

    const logout = async () => {
        const response = await signOut(auth)
        console.log(response)
        /*try catch */
    }
    const authValue = {
        register, loginUser, loginWithGoogle, logout
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )
}


/**
 * const register = async (email, password,firstName, lastName)=>{
    try{
        //create a firebase auth user
    const {user} = await createUserWithEmailAndPassword (auth,email, password);
    //profile with name and lastName
    await user.updateProfile({
        displayName: `${firstName} ${lastName}`
    })
    //Para guardar los datos del usuario en la firestore
    await setDoc(doc(firestore, "users",user.uid)),{
        firstName,
        lastName
    }
    return user;
    } catch(e){
        throw e
    }
}
 */