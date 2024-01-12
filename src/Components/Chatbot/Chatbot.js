import React, { useEffect, useState } from 'react'
import "./Chatbot.css";
import bot from "../../Images/bro.png";
import ai  from  "../../Images/AI .png";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { doc } from 'firebase/firestore';

const Chatbot = ()=> {
  
  const [arr, setOut] = useState([
    "Hi !! How may I help you ?"
  ]);

  




    useEffect( () => {
        const submitButton = document.getElementById("submit-button");
        const userInput = document.getElementById("user-input");
        const userOutput = document.querySelector(".output");

    
        submitButton.addEventListener("click", () => {
            const message = userInput.value.trim();
        console.log("the button was clicked", message);
        arr.push(message);
            if (message === '') {
                return; // Don't send empty messages
            }
    
            // Clear user input
            userInput.value = '';
    
            // Create a FormData object and append the 'message' field as a string
            const formData = new FormData();
            formData.append('message', message);
    
            // Make an API request to http://127.0.0.1:5000/response


            fetch("http://127.0.0.1:5000/response", {
                method: "POST",
                body: formData // Send the FormData object
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('API Response:', data); // Log the API response for debugging
                // Display the API response
                addBotMessage(data.output);
            })
            .catch(error => {
                console.error('Error:', error); // Log any errors for debugging
            });
        });
    
        function addBotMessage(message) {
            // userOutput.innerHTML = `Chatbot: ${message}`;
            // arr.push(message)
            setOut(message);
            
        }


    },[])
    




  return (
    <div>
       <Navbar/>
    <div className="whole-bot-cont">
   
      <div className="bot-cont">
        <div className="bot-img-cont"> <img src={bot} alt=""/></div>

        {/* <p className="output-Speech"></p> */}
        <img className='ai' src= {ai} />

        <div className='bot-right'>
          <div className='output'>
              {
                arr.map((element)=>{
                  return <p>{element}</p>
                })

              }
           
          </div>
           <div className="bot-page-btns">
          <div className="start-convo-btn-cont">
            <label>Enter your message:</label>
            <input type="text" id="user-input" />
            <button  className="start-convo-btn" id="submit-button">
              Submit
            </button>
          </div>
      </div>
        </div>
      </div>

     

      


    </div>

    <Footer/>
    </div>
  )
        
            }
export default Chatbot
