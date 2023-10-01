import React from 'react'
import './Cards.css';
import pic from "../../Images/EDUC.jpg";
function Cards(props) {


  return (
   
    <div className="card mb-3" style={{maxWidth: "540px"}}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={pic}className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{props.des}</p>
          <p className="card-text"><small className="text-body-secondary">{props.name}</small></p>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Cards
