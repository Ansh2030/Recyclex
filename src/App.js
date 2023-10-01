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

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Landing/>}/>
        <Route path="/chatbot" element= {<Chatbot/>}/>
        <Route path="/api/blogs" element= {<Blog/>}/>
        <Route path="/api/compose" element= {<Compose/>}/>
        <Route path="/Locate" element= {<Locator/>}/>
        <Route path="/quiz" element= {<Quiz/>}/>
      </Routes>
  
    </div>
    </Router>
   
  );
}

export default App;
