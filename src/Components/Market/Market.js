import React, { useState } from 'react'
import "./Market.css"
import p from '../../Images/Poster1.jpg';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import sam from "../../Images/sam.jpeg";
import one from "../../Images/one.jpeg";
function Market() {
const [ind, setIN] = useState(0);
let ar=[
    "",
    one,
    sam
]
let cred = [
    "",
    200,
    150
]


  return (
    <div>
      <Navbar/>
        <div className='mobitech'>
            <div className='leftmob'>
                <h4>Selected Device</h4>
                <div className='foo'>
                    <img src={ar[ind]} alt="Your Device"/>
                </div>

                <div className='cred'>
                    Credit Points : {cred[ind]}
                </div>

            </div>
            
            <div className='rightmob' >
            <div className='det'>
                    <div>Type of Electronic</div>
                    <div className='ipt' ><input type="text" /></div>
                </div>
                <div className='det'>
                    <div>Brand & Model</div>
                    <div className='ipt' ><input type="text" /></div>
                </div>
                <div className='det'>
                    <div>Carriers</div>
                    <div className='ipt' ><input type="text" /></div>
                </div>

                <div className='det'>
                    <div>Storage</div>
                    <div className='ipt' ><input type="text" /></div>
                </div>

                <div className='det'>
                    <div>Is your device fully functional ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>

                <div className='det'>
                    <div>Does the device power On ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>
                <div className='det'>
                    <div>Does the Screen lightup properly ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>
                <div className='det'>
                    <div>Are there Scratches on device ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>
                <div className='det'>
                    <div>Are there cracks in the device body ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input type="checkbox" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>


            </div>
        
        </div>
        <button onClick={()=> {setIN(ind+1);
        alert(" Congratulations !! Credits added to your Account !!")}} className='mobibtn'>
        Pick Up
        </button>
        <button onClick={()=> setIN(0)} className='mobibtn1'>
        Cancel
        </button>
        
    <Footer/>
      
    </div>
   
  )
}

export default Market
