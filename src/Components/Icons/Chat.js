import React from 'react'
import "./Chat.css"
import p from "../../Images/chatboticon.png"
import { Navigate, useNavigate } from 'react-router-dom'
function chat() {
    const Go=()=>{
       <Navigate to="/app/chatbot"/>
    }
  return (
    <div>
        <div>
        <a href="/app/chatbot"> <img className="cbicon" src={p} alt="chatbot"/></a>
     
    </div>
    </div>
  )
}

export default chat
