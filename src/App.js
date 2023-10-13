import firebase from 'firebase/compat/app';

import './App.css';
import Chatbot from './Components/Chatbot/Chatbot';
import { createContext, useEffect , useState, useContext} from "react";
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import {
  onAuthStateChanged
} from 'firebase/auth';
import {auth} from '../src/firebase_config';
import Landing from './Components/Landing';
import PrivateRoutes from './Components/PrivateRoutes';
import Blog from './Components/Blogs/Blog';
import Compose from './Components/Compose/Compose';
import Locator from './Components/Locator/Locator';
import Quiz from './Components/Quiz/Quiz';
import Signin from './Components/Signin/Signin';

import Chat from "./Components/Icons/Chat"
import { useUserAuth } from './Context/UserAuthContext';
import Dashboard from './Components/Dashboard/Dashboard';
import Display from './Components/Blogs/Display';
import Pop from './Components/Popup/Pop';
import Market from './Components/Market/Market';
//import ProtectedRoute from './Components/ProtectedRoute';
function App() {
 
  const {user , setUser} = useUserAuth();
 
 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
   setUser(currentUser);

  })
  return()=>{
      unsubscribe();
  }
   },[])
  
  return (
<Router>
    <div>
     
      <Chat/>
      <Routes>
      <Route path="/" element= { <Landing/>}/>
      <Route path="/signin" element= {<Signin/>}/>
      <Route path="/display" element= {<Display/>}/>


      <Route path="/app" element= { <PrivateRoutes/>}>

      <Route path="chatbot" element= { <Chatbot/>}/>
      <Route path="api/blogs" element= {<Blog/>}/>
      <Route path="api/compose" element= {<Compose/>}/>
      <Route path="Locate" element= {<Locator/>}/>
      <Route path="quiz" element= {<Quiz/>}/>
      <Route path="dashboard" element= {<Dashboard/>}/>
      <Route path="Market" element= {<Market/>}/>
      </Route>
      </Routes>
  
    </div>
    </Router>
   
   
    
  );
}

export default App;
