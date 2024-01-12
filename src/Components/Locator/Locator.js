import { useJsApiLoader, GoogleMap, MarkerF, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import React, { useState, useRef, useEffect} from 'react'
import './Locator.css';
import Navbar from "../Navbar/Navbar";

import LocateCard from "./LocateCard";
import p1 from "../../Images/icons8-cross-48 (1).png";
import p2 from "../../Images/icons8-right-arrow-32.png"
import Footer from "../Footer/Footer";
import Map_marker from "../Map_Marker/Map_Marker"
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
    },
    {
      name: 'Matrix Info Systems Private Limited',
      location: { lat:28.54944493768672,lng: 77.25227167139299 },
      description: 'X-22, B-Block, Phase 2, Okhla Industrial Area, New Delhi, Delhi, India, Asia'
  },
  {
      name: 'TAJ COMPUTER SOLUTIONS PVT LTD',
      location: { lat:28.49034745694173,lng: 77.30333836534822},
      description: 'B-2/28 MOHAN CO-OPERATIVE INDUSTRIAL ESTATE, Badarpur, New Delhi, Delhi, India, Asia'
  },
  {
      name: 'Cynosure Recycling Private Limited', location:{lat: 28.783264209180548, lng:77.71134562371084 },
      description:'Khasra No 64, Village Peeplikhera, Pargana Sarawa, Meerut, Uttar Pradesh, India, Asia'
  },
  {
      name: 'Eco Fly E-Waste Recycling PVT. LTD',
      location: { lat: 28.889123126017264, lng: 77.76181659990246 },
      description: 'Khasra No.26, Piplikhera Bhamanpura Road, Industrial Area Phapunda, Meerut, Uttar Pradesh, India, Asia'
  },
  {
      name: 'Recology Recycling India Private Limited',
      location: { lat:28.89250, lng: 77.76028},
      description: 'Khasra No 69 to 71, Vill Peepli Khera, Pargana Sarava, Meerut, Uttar Pradesh, India, Asia'
  },
  {
      name: 'TES-AMM (INDIA) PVT LTD',
      location: { lat:28.881021876041235,lng: 77.10488205863943 },
      description: 'Killa No.56/13/2/3, 14/1/2, Wazidpur Saboli Village, Sonepat, Haryana, India, Asia'
  },
  {
      name: 'Edhini Recycling Pvt. Ltd.',
      location: { lat:28.90836620384709, lng:77.64350817450898},
      description: 'Khasra No-607 M, Achronda Paragana, Tehsil Meerut, District Meerut, Uttar Pradesh, India, Asia'
  },
  {
      name: 'Deshwal Waste Management Pvt. Ltd',
      location: { lat: 28.367510180120426, lng: 76.9245300812019 },
      description: 'Plot No.15, Sector-5,IMT Manesar, Gurgaon, Haryana, India, Asia'
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
       className="goto"
       center={center}
        zoom ={13} 
        mapContainerStyle={{width:'600px', height:'780px'}}
        onLoad={(map)=>setMap(map)}>


       <MarkerF position={center} title="Home"/>
        <MarkerF position={recyclingFacilities[0].location}   title={recyclingFacilities[0].name} />
        <MarkerF position={ recyclingFacilities[1].location}  title={recyclingFacilities[1].name}/>
        <MarkerF position={recyclingFacilities[2].location}  title={recyclingFacilities[2].name}/> 
        <MarkerF position={recyclingFacilities[3].location}  title={recyclingFacilities[3].name}/> 
        <MarkerF position={recyclingFacilities[4].location}  title={recyclingFacilities[4].name}/> 
        <MarkerF position={recyclingFacilities[5].location}  title={recyclingFacilities[5].name}/> 
        <MarkerF position={recyclingFacilities[6].location}  title={recyclingFacilities[6].name}/> 
        <MarkerF position={recyclingFacilities[7].location}  title={recyclingFacilities[7].name}/> 
        <MarkerF position={recyclingFacilities[8].location}  title={recyclingFacilities[8].name}/> 
        <MarkerF position={recyclingFacilities[9].location}  title={recyclingFacilities[9].name}/> 
        <MarkerF position={recyclingFacilities[10].location}  title={recyclingFacilities[10].name}/> 



        {/* <Map_marker position={recyclingFacilities[2].location}  title={recyclingFacilities[2].name} label={recyclingFacilities[1].name}/> */}
      
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
        
        <img  src={p2}  onClick={()=> map.panTo(center)} className="arrow" alt=""/>
    </div>


    <Footer/>

    </div>

    
  )
}

export default Locator;
