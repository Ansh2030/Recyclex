import React from 'react';
import './Services.css';
import pic from "../../Images/ewaste.jpg";
function Services() {
  return (
    <div>
      <div className="facilities">
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="row">

          <div className="facilities-col">
            <img src={pic}/>
            <h3>E-waste Facility Locator</h3>
            <p>Locating the nearest e waste facilities near you. We Provide you options to either schedule pickUp or Drop off Yourself</p>
          </div>

          <div className="facilities-col">
          <img src={pic}/>
            <h3>Blogs and News</h3>
            <p>Know more about the Ewaste management plans, infrastructure and its importance . Connect with people and share you ideas. Or chat with our bot.</p>
          </div>

          <div className="facilities-col">
          <img src={pic}/>
            <h3>Buy/Sell Products</h3>
            <p>You also get a platform to buy or sell you electronic items for the best price through our platform. </p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Services
