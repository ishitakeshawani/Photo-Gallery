import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../firebase/config";

export const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function getUser(){
        const user = auth().currentUser;
        if (user !== null) {
            const displayName = user.displayName;
            // const email = user.email;
            // const photoURL = user.photoURL;
            // const emailVerified = user.emailVerified;
            const uid = user.uid;
            console.log(displayName);
            console.log(uid);
          }
         

    }

    useEffect(() => {
        const unsubcribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubcribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        getUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
