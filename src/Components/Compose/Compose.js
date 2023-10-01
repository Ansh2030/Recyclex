import React from 'react'
import './Compose.css';
import { useState } from 'react';
function Compose() {
    const [formData, setFormData] = useState({
        "id":"1002",
        "data":"this is the blog comming from react"
    });

    const handleSubmit = (event) => {

        
        event.preventDefault(); 
        const serializedBody = JSON.stringify(formData); 
        console.log(serializedBody);
        const fetchOptions = { 
          method: 'POST', 
          headers: { 'Content-Type': 'application/json',},
          body: serializedBody 
        };
        fetch('http://localhost:8080/api/compose', fetchOptions); // We pass in the options here to configure our fetch request
      };
      

  return (
    <div>
       <div className="container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="email">Email ID</label>
                <input type="text" id="email" name="id" placeholder="Your email address" required/>
            </div>
            <div className="form-group">
                <label for="email">Subject</label>
                <input type="text" id="email" name="subject" placeholder="Your email address" required/>
            </div>
            <div className="form-group">
                <label for="content">Content</label>
                <textarea id="content" name="blog" rows="6" placeholder="Enter your message here" required></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Compose
