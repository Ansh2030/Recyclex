import { createContext, useEffect , useState, useContext} from "react";
import {  } from "react-router-dom";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../firebase_config';

const userAuthcontext = createContext();

export function UserAuthContextProvider({children}){

const [user, setUser] = useState();


 function signUp(email, password ){
    return createUserWithEmailAndPassword(auth,email, password);
 }
 function logIn(email, password ){
    return signInWithEmailAndPassword(auth,email, password);
 }
 function logOut(){
    return signOut(auth);
 }

 useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
 setUser(currentUser);
})

return()=>{
    unsubscribe();
}
 },[])





    return(
        <userAuthcontext.Provider value= {{user , signUp, logIn, logOut}}>
            {children}
        </userAuthcontext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthcontext);
}