import React from 'react'
import './Compose.css';
import { useState } from 'react';
function Compose() {
    const [formData, setFormData] = useState({});
    const [name, setname] = useState();
    const [sub , setsub] = useState();
    const [msg , setmsg] = useState();
    const [index , setIndex] = useState(100);


    const handleSub=(event)=>{
        event.preventDefault(); 
        let a = index;
        setIndex(index+1);
      setFormData({
        "id": a,
        "name": name,
        "subject": sub,
        "msg": msg
        // a,n,sub,msg
    })

    handleSubmit();
    }
    const handleSubmit =async () => {
       
        // let n = document.getElementById('name').value;
       
       
         console.log(formData);
       
        const serializedBody = JSON.stringify(formData); 
        console.log(serializedBody);
        const fetchOptions = { 
          method: 'POST', 
          headers: { 'Content-Type': 'application/json'},
          body: serializedBody 
        };
        await fetch('http://localhost:8080/api/compose', fetchOptions); // We pass in the options here to configure our fetch request
      };
      

  return (
    <div className='comp'>
       <div className="container">
        <h2>Contact Us</h2>
        <form>
            <div className="form-group">
                <label for="email">Name</label>
                <input type="text" id="name" name="id" placeholder="Name" onChange={(e)=>setname(e.target.value)} value = {name}required/>
            </div>
            <div className="form-group">
                <label for="email">Subject</label>
                <input type="text" id="email" name="subject" placeholder="Your Subject"  onChange={(e)=>setsub(e.target.value)} value = {sub} required/>
            </div>
            <div className="form-group">
                <label for="content">Content</label>
                <textarea id="content" name="blog" rows="6" placeholder="Enter your message "  onChange={(e)=>setmsg(e.target.value)} value = {msg} required></textarea>
            </div>
            <button type="submit" onClick={handleSub}>Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Compose
