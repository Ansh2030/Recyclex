import React from 'react'
import './Cards.css';
import pic from "../../Images/EDUC.jpg";
import { Navigate } from 'react-router-dom';
function Cards(props) {


  return (
  <div class="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.des}</p>
    <a href="/display"  className="card-link">Read More</a>
  </div>
</div>

  )
}

export default Cards
