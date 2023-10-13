import { createContext, useEffect , useState, useContext} from "react";
import {  } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase_config';
import firebase from "firebase/compat/app";

export const UserAuthcontext = createContext();

export function UserAuthContextProvider({children}){

const [user, setUser] = useState();

// const [login, setLogin] = useState(false || window.localStorage.getItem('auth')==='true');

 function signUp(email, password ){
    window.localStorage.setItem('auth', true);
    return createUserWithEmailAndPassword(auth,email, password);
 }
 function logIn(email, password ){
    window.localStorage.setItem('auth', true);
    return signInWithEmailAndPassword(auth,email, password);
 }
 function logOut(){
   window.localStorage.removeItem('auth');
    return signOut(auth);
 }


 const loginWithGoogle= ()=>{
    firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((userCred)=>{
      console.log(userCred);
    })
      }

 useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
 setUser(currentUser);
//  setLogin(true);

})

// return()=>{
//     unsubscribe();
// }
 },[])





    return(
        <UserAuthcontext.Provider value= {{user , setUser, signUp, logIn, logOut,loginWithGoogle}}>
            {children}
        </UserAuthcontext.Provider>
    )
}

export function useUserAuth(){
    return useContext(UserAuthcontext);
}
