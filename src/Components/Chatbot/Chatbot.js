import React, { useEffect } from 'react'
import "./Chatbot.css";
import bot from "../../Images/bro.png";
import ai  from  "../../Images/AI .png";

const Chatbot = ()=> {

    useEffect( () => {
        const submitButton = document.getElementById("submit-button");
        const userInput = document.getElementById("user-input");
        const userOutput = document.querySelector(".output-Speech");
    
        submitButton.addEventListener("click", () => {
            const message = userInput.value.trim();
        console.log("the button was clicked");
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
            userOutput.innerHTML = `Chatbot: ${message}`;
            
        }
    },[]);
    




  return (
    <div>
        {/* <div className="back-to-home">
      <a href="../index.html">
        <h1><i className="fas fa-long-arrow-alt-right back-to-home-arrow"></i>
        </h1>
      </a>
    </div> */}

    <div className="whole-bot-cont">
      {/* <div className="the-head">
        <p>Im Here for you &#60;3</p>
      </div> */}

      <div className="bot-cont">
        <div className="bot-img-cont"> <img src={bot} alt=""/></div>

        {/* <p className="output-Speech"></p> */}
        <img className='ai' src= {ai} />

        <div className='bot-right'>
          <div className='output'>

          </div>



           <div className="bot-page-btns">
        
          <div className="start-convo-btn-cont">
            <label>Enter your message:</label>
            <input type="text" id="user-input" />
            <button className="start-convo-btn" id="submit-button">
              Submit
            </button>
          </div>
      </div>
        </div>
      </div>

     

      


    </div>
    </div>
  )
}

export default Chatbot
