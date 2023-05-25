/* eslint-disable no-unused-vars */ 
import { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword,
     getAuth, onAuthStateChanged, signInWithEmailAndPassword,
      signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuth = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) =>{
      setUser(loggedUser);
      setLoading(false);
      console.log('logged in user with auth state observer', loggedUser)
    })

    return () =>{
      unsubscribe();
    }
  },[])

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuth);
  }

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (user, name, photoUrl) => {
    return updateProfile(user, {
      displayName: name,
       photoURL: photoUrl
    }).then(() => {
      
    }).catch((error) => {
     console.log(error)
    });

  }
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true);
   return signOut(auth);
    
  }
  
  
  
  
  const authInfo = {
    user,
    createUser,
    googleSignIn,
    updateUserProfile,
    signIn,
    logOut,
    loading,

}
  return  <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
  
}

export default AuthProvider
