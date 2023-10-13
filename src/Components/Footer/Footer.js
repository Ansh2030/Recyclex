import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <div  >
       <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>Quick links</h4>
  	 			<ul>
  	 				<li><a href="#">Locate</a></li>
  	 				<li><a href="#">Blogs</a></li>
  	 				<li><a href="#">Dashboard</a></li>
  	 				<li><a href="#">Chatbot</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Our Services</h4>
  	 			<ul>
  	 				<li><a href="#">Old device replacement</a></li>
  	 				<li><a href="#">Nearest e-waste Facility</a></li>
  	 				<li><a href="#">AI-based Chatbot</a></li>
  	 				{/* <!-- <li><a href="#">Market-place</a></li> --> */}
  	 				<li><a href="#">Education Popups</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Information</h4>
  	 			<ul>
  	 				<li><a href="#">Who we are</a></li>
  	 				<li><a href="#">Quizes</a></li>
  	 				<li><a href="#">blogs</a></li>
  	 				<li><a href="#">Newsletter</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"/></a>
  	 				<a href="#"><i className="fab fa-twitter"/></a>
  	 				<a href="#"><i className="fab fa-instagram"/></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  )
}

export default Footer
