import React from 'react'
import "./Pop.css";
import close from "../../Images/icons8-cross-48 (1).png"
import p from "../../Images/WhatsApp Image 2023-10-05 at 23.58.23_803fc830.jpg";
fetch("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");
function Pop(props) {
  return (props.trigger?
    <div>
        <div class="ccard">
        <div class="left-part">
            <h2>E-Waste Content</h2>
            <p>
                Electronic waste (e-waste) refers to discarded electronic devices and equipment. It includes computers, smartphones, appliances, and more. Proper disposal and recycling of e-waste are essential to reduce environmental impact.
            </p>
        </div>
        <div class="right-part">
            <img src={p}alt="E-Waste" class="e-waste-image"/>
            
            {/* <span class="close-button" id="closeButton"><i class="fas fa-times"></i></span> */}
            <img src={close} onClick={()=> props.setTrigger(false)} className="close-button" id="closeButton"/>
        </div>
    </div>
    </div>:""
  )
}

export default Pop
