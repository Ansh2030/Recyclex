import firebase from 'firebase/compat/app';
import './App.css';
import Chatbot from './Components/Chatbot/Chatbot';
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
import Landing from './Components/Landing';
import Navbar from './Components/Navbar/Navbar';
import Blog from './Components/Blogs/Blog';
import Compose from './Components/Compose/Compose';
import Locator from './Components/Locator/Locator';
import Quiz from './Components/Quiz/Quiz';
import Signin from './Components/Signin/Signin';
import { UserAuthContextProvider } from './Context/UserAuthContext';
//import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
    <UserAuthContextProvider>
<Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element= { <Landing/>}/>
        <Route path="/chatbot" element= { <Chatbot/>}/>
        <Route path="/api/blogs" element= {<Blog/>}/>
        <Route path="/api/compose" element= {<Compose/>}/>
        <Route path="/Locate" element= {<Locator/>}/>
        <Route path="/quiz" element= {<Quiz/>}/>
        <Route path="/signin" element= {<Signin/>}/>
      </Routes>
  
    </div>
    </Router>
   
    </UserAuthContextProvider>
    
  );
}

export default App;
