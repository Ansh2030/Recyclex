import React from 'react'
import './Navbar.css';
import { useUserAuth } from '../../Context/UserAuthContext';
function Navbar() {
    const {user ,login,setLogin, logOut} = useUserAuth();
    console.log("this is navbar ",user);
    const handlelogout= ()=>{
         logOut();
    
        alert("Logged Out")
    }
  return (
    <div>
         <div className="header">
            <div className="logo-cantainer">
                <h2 className="logo">RecycleX</h2>
            </div>

            <div className="nav-and-btn-cont">
                <div className="nav-list-cont">
                    <ul className="nav-ul">
                        <li><a href="/" >HOME</a></li>
                        <li><a href="/app/api/blogs">BLOGS</a></li>
                        {/* <li><a href="/app/api/compose">Compose</a></li> */}
                        {/* <li><a href="/app/chatbot">Chatbot</a></li> */}
                        {/* <li><a href="otherHTML/statistics.html">WHO WE ARE?</a></li> */}
                        <li><a href="/app/locate">LOCATE</a></li>
<<<<<<< HEAD
                        <li><a href="/app/quiz">QUIZE</a></li>
=======
                        <li><a href="/app/quiz">QUIZ</a></li>
>>>>>>> 79a21d0eaba3bc2f1ae5ddf6ef382ef40d3106b9
                        <li><a href="/app/dashboard">DASHBOARD</a></li>
                        <li><a href="/app/Market">MARKET</a></li>
                        {
                            user?  <li onClick={handlelogout}> <a>LogOut</a></li>  :<li><a href="/signin">Signin</a></li>
                        }
                        
                        
                    </ul>
                </div>



                

                <div className="hamBurger">
                    <diV className="line line1"></diV>
                    <div className="mid-line-cont">
                        <div className="line mid-line1"></div>
                        <div className="line mid-line2"></div>
                    </div>
                    <diV className="line line3"></diV>
                </div>
            </div>

        </div>

        <div className="mobile-view-nav-cont" id="mobile-nav">

            <div className="mobile-view-nav-head">
                <p>Menu</p>
            </div>

            <div className="mobile-view-nav-list">

                <ul>
                    <li ><a href="#HOME" className="mobile-view-list">HOME</a></li>
                    <li ><a href="#SECTION-3" className="mobile-view-list">BLOGS</a></li>
                    <li ><a href="otherHTML/statistics.html" className="mobile-view-list">WHO WE ARE?</a></li>
                    <li ><a href="#FOOTER" className="mobile-view-list">LOCATE</a></li>
                </ul>

            </div>

        </div>


    </div>
  )
}

export default Navbar
