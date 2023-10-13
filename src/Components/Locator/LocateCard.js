import React from 'react'
import './LocateCard.css';
import pic from "../../Images/EDUC.jpg";

function LocateCard(props) {
  return (
    <div>
       <div className="locatecard">
          <div><img src={pic}/></div>
          <div className="card-left">
            <div className="head"><h5>{props.head}</h5></div>
            <div className="add">{props.add}</div>
          </div>
       </div>
      
    </div>
  )
}

export default LocateCard
