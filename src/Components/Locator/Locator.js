import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import React, { useState, useRef, useEffect} from 'react'
import './Locator.css';
import Navbar from "../Navbar/Navbar";

import LocateCard from "./LocateCard";
import p1 from "../../Images/icons8-cross-48 (1).png";
import p2 from "../../Images/icons8-right-arrow-32.png"
import Footer from "../Footer/Footer";
function Locator() {
  const [lat, setlat] = useState();
  const[long , setlong] = useState();

  useEffect(()=>{

    navigator.geolocation.getCurrentPosition(function(position) {
      
      setlat(position.coords.latitude)
      console.log("Longitude is :", position.coords.longitude);
      setlong( position.coords.longitude);
    
    
    })
     
  },[])

  // console.log("Latitude is :", lat);
  const center =  { lat: lat, lng: long },
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
  const [directionRes, setDiirectionRes] = useState(null);
  const [Distance, setDistance] = useState('');
 const [duration , setDuration] = useState('');
/**@type React.MutableRefObject<HTMLInputElement> */
 const originRef = useRef();
/**@type React.MutableRefObject<HTMLInputElement> */
 const destinationRef = useRef();


if(!isLoaded){
  return("api error");
} 



async function calculateroute(){
  if(originRef.current.value===''|| destinationRef.current.value==='')
  return
//eslint-disable-next-line no-undef
  const  directionService = new google.maps.DirectionsService();
  const results = await directionService.route({
    origin:originRef.current.value,
    destination: destinationRef.current.value,
    //eslint-disable-next-line no-undef
    travelMode: google.maps.TravelMode.DRIVING

  })

  setDiirectionRes(results);
  setDistance(results.routes[0].legs[0].distance.text);
  setDuration(results.routes[0].legs[0].duration.text);
}

function clearRout(){
  setDiirectionRes(null);
  setDistance('')
  setDuration('')
  originRef.current.value = ''
  destinationRef.current.value =''; 
}

  return (
    <div >
        <Navbar/>

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
       <GoogleMap 
       center={center}
        zoom ={13} 
        mapContainerStyle={{width:'600px', height:'780px'}}
        onLoad={(map)=>setMap(map)}>


        <Marker position={center}/>
        <Marker position={recyclingFacilities[0].location}/>
        <Marker position={ recyclingFacilities[1].location}/>
        <Marker position={recyclingFacilities[2].location}/>
      
        {directionRes && <DirectionsRenderer directions={directionRes} />}
       </GoogleMap>
    </div>

   

 
      </div>

      {/* <div className="navigate">
      <Autocomplete>
      <input type='text' placeholder="Origin"  ref = {originRef}/>
      </Autocomplete>

      <Autocomplete>
      <input type='text' placeholder="Destinatiion" ref = {destinationRef}/>
      </Autocomplete>

      <div>Distance:{Distance}</div>
      <div>Duration:{duration}</div>

      </div>

      <button onClick={()=> map.panTo(center)}>recenter</button>
     
   
     
     
     <button onClick={calculateroute}>Calculate route</button>
     <button onClick={clearRout}>Clear route</button>


 */}

<div className="car">
        <div className="input-row">
          <Autocomplete>
            <input type="text" id="origin" placeholder="Origin" ref = {originRef}/>
            </Autocomplete>
            <Autocomplete> 
              <input type="text" id="destination" placeholder="Destination" ref = {destinationRef}/>
              </Autocomplete>
           
            <button id="calculate-route"  onClick={calculateroute} className="button1">Calculate Route</button>
            {/* <!-- <i className="fas fa-times"></i> --> */}
          <img src={p1} onClick={clearRout} alt=""/>

        </div>

        <div className="output-row">
            <div className="output-data">
                <span className="output-label">Distance:</span>
                <span id="distance">{Distance}</span>
            </div>
            <div className="output-data">
                <span className="output-label">Duration:</span>
                <span id="duration">{duration}</span>
                {/* <!-- <i className="fas fa-arrow-right"></i> --> */}
               
            </div>
        </div>
        
        <img src={p2}  onClick={()=> map.panTo(center)} className="arrow" alt=""/>
    </div>


    <Footer/>

    </div>

    
  )
}

export default Locator;
