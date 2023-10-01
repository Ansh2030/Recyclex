import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from "@react-google-maps/api";
import React, { useState } from 'react'
import './Locator.css';

import LocateCard from "./LocateCard";
function Locator() {
  const center =  { lat: 28.63433872606968, lng:  77.44593531148566  },
   {isLoaded }= useJsApiLoader({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  libraries:['places']
  })

  const recyclingFacilities = [
    {
        name: '	GreenTek Reman Pvt Ltd',
        location: { lat: 28.517926348710926, lng: 77.51813344150099  },
        description: 'Plot No- B2/12, Site-B, Surajpur Industrial Area, Greater Noida (U.P.) - 201 306, India, GAUTAM BUDH NAGAR, Uttar Pradesh, India, Asia'
    },
    {
        name: 'Mahalaxmi Metalloys India PVT. LTD.',
        location: { lat: 28.81617557652459, lng: 77.55456162608404   , },
        description: 'Khasra No. 87, 91, 92 Sikheda Rd, Industrial Area, Modi Nagar, Ghaziabad, Uttar Pradesh, India, Asia'
    },
    {
        name: 'Rajdhani Recycling Private Limited	',
        location: { lat: 28.546524523204525, lng: 77.27402925207778 , },
        description: 'Plot No F-416, M G Road Industrial Area, Hapur, Ghaziabad Uttar Pradesh, India, Asia'
    }
];

  const [map, setMap] = useState(/**@type google.maps.Map */ (null));
if(!isLoaded){
  return("api error");
} 

  return (
    <div >
      
      <div className="locatebody">

      <div className="card-container">
        <div className="heada">
        <h2>E-Waste Facilities Near Me</h2>
        </div>
      
        
      {/* <div className="navigate">
            <input type="text"className="from"/>
            <input type = "text" className="to"/>
      </div> */}
    
      <div className="list">
      {recyclingFacilities.map((element)=>{
        return   <LocateCard head={element.name} add = {element.description}/>
      })}
      </div>
     

      </div>

  
  <div id="map">
       <GoogleMap center={center} zoom ={13} mapContainerStyle={{width:'600px', height:'780px'}}>
        <Marker position={center}/>
       </GoogleMap>
    </div>
 
   
    
   
      
      
      
      </div>
     


    </div>
  )
}

export default Locator
