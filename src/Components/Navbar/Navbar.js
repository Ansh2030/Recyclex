import React from 'react'
import './Navbar.css';
function Navbar() {
  return (
    <div>
         <div className="header">
            <div className="logo-cantainer">
                <h2 className="logo">Recyclex.</h2>
            </div>

            <div className="nav-and-btn-cont">
                <div className="nav-list-cont">
                    <ul className="nav-ul">
                        <li><a href="/" >HOME</a></li>
                        <li><a href="/api/blogs">BLOGS</a></li>
                        <li><a href="/api/compose">Compose</a></li>
                        <li><a href="/chatbot">Chatbot</a></li>
                        <li><a href="otherHTML/statistics.html">WHO WE ARE?</a></li>
                        <li><a href="/locate">LOCATE</a></li>
                        <li><a href="/quiz">Quiz</a></li>
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
