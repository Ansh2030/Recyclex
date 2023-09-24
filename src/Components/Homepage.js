import React from 'react'
import poster1 from "../../src/Images/Poster1.jpg";
import sower from "../../src/Images/gsower.png";
import './Homepage.css';
function Homepage() {
  return (
    <div>
       <div className="section1">
         <h1>Recyclex Extracting Treasure form Trash</h1>
       </div>

       <div className="mech">
            <div className="details">
              <h1>
               Who We Are?
              </h1>
              <p>
              Our proposed solution is to increase e-waste collection, from the individuals, educational institutions and Industries and  ensure proper disposal where the treasure can be extracted from trash. And spread awareness.

              </p>
              <p>
              The website serves as a centralized platform that provides users with vital information regarding the location of the nearest e-waste collection and recycling facilities,. It seamlessly combines pick-up and drop-off services, enabling users to locate nearby e-waste facilities or opt for convenient home collection scheduling at no extra charges.
              </p>
              <p>	We offer educational features to shed light on detrimental effects of e-waste on environment and human health, in an interactive manner.
         It will allow people to form communities on the app and share blogs , newsletters etc .Along with a platform to resell used products at best prices and also earn credit points on the precious metals recovered from device.
            </p>
            </div>
            <div className="logomech">
              <img src={sower} alt="this is image" />
            </div>
          </div>

          


       
    </div>
  )
}

export default Homepage
