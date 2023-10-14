import React, { useState } from 'react'
import "./Market.css"
import p from '../../Images/Poster1.jpg';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import def from "../../Images/SaamSung.webp"
import sam from "../../Images/sam.jpeg";
import one from "../../Images/one.jpeg";
function Market() {
const [ind, setIN] = useState(0);
const [selectedBrand, setSelectedBrand] = useState('samsung');
const [selectedModel, setSelectedModel] = useState('');
const [show, setShow] = useState(false);
const [dis, setdis] = useState(false);
let ar=[
    def,
    def,
    sam,
    one
];
let cred = [
    "",
    200,
    1500,
    300
];
const handleBrandChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    setSelectedModel('');
 setShow(true);
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
  };

  const handledevice = (e)=>{
    const s = e.target.value;
    console.log(s);
    if(s=='Other')
   { setdis(true);
    setShow(true);}
    else
    setdis(false);

   
  }



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
                        <div className='ipt'>
                            <select className='sel' onChange={handledevice}>
                            <option value="-1" selected>Select</option>
                                <option value="mobile">Mobile</option>
                                <option value="laptop">Laptop</option>
                                <option value="Tablet">Tablet</option>
                                <option value="Printer">Printer</option>
                                <option value="Mouse">Mouse</option>
                                <option value="CPU">CPU</option>
                                <option value="Monitor">Monitor</option>
                                <option value="Keyboard">Keyboard</option>
                                <option value="Other">Others</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>

                    <div className='det'>
                        <div>Brand</div>
                        <div className='ipt'>
                            <select className='sel' disabled={dis} onChange={handleBrandChange} value={selectedBrand}>
                            <option value="-1" selected>Select</option>
                                <option value="samsung">Samsung</option>
                                <option value="apple">Apple</option>
                                <option value="oneplus">Oneplus</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>
                  

                    <div className='det'>
                        <div>Model</div>
                        <div className='ipt'>
                        <select className='sel' disabled={dis} onChange={handleModelChange} value={selectedModel}>
                {/* Use a dynamic list of models based on the selected brand */}
                {selectedBrand === '-1' && (
                  <>
                  <option value="-1" selected>Please Select Brand First</option>
                   
                    {/* Add more options as needed */}
                  </>
                )}
                {selectedBrand === 'samsung' && (
                  <>
                  <option value="-1" selected>Select</option>
                    <option value="model1">Galaxy J2</option>
                    <option value="model2">S21 FE</option>
                    {/* Add more options as needed */}
                  </>
                )}
                {selectedBrand === 'apple' && (
                  <>
                  <option value="-1" selected>Select</option>
                    <option value="modelA">Model A</option>
                    <option value="modelB">Model B</option>
                    {/* Add more options as needed */}
                  </>
                )}
                {selectedBrand === 'oneplus' && (
                  <>
                  <option value="-1" selected>Select</option>
                    <option value="modelX">Nord CE 2</option>
                    <option value="modelY">7T</option>
                    {/* Add more options as needed */}
                  </>
                )}
              </select>
                           
                        </div>
                    </div>

                {/* <div className='det'>
                    <div>Storage</div>
                    <div className='ipt' ><input type="text" /></div>
                </div> */}

<div className='det'>
                        <div>Quantity</div>
                        <div className='ipt'>
                            {/* <select className='sel' disabled={dis} onChange={handleBrandChange} value={selectedBrand}>
                            <option value="-1" selected>Select</option>
                                <option value="samsung">Samsung</option>
                                <option value="apple">Apple</option>
                                <option value="oneplus">Oneplus</option>
                               
                            </select> */}

                            <input  className="sel" type="text" disabled={dis} />

                        </div>
                    </div>


                <div className='det' style={{visibility: show?'visible':'hidden'}}>
                    <div>Is your device fully functional ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input  className="green-radio" name="functional" type="radio" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input className="green-radio" name="functional" type="radio" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>

                <div className='det' style={{visibility: show?'visible':'hidden'}}>
                    <div>Does the device power On ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input className="green-radio"  name="powerOn" type="radio" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input className="green-radio" name="powerOn" type="radio" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>
                <div className='det' style={{visibility: show?'visible':'hidden'}}>
                    <div>Does the Screen lightup properly ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input className="green-radio" name="lightup" type="radio" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input className="green-radio" name="lightup" type="radio" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>
                <div className='det' style={{visibility: show?'visible':'hidden'}}>
                    <div>Are there Scratches on device ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input className="green-radio" name='scratches' type="radio" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input className="green-radio" name="scratches" type="radio" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>
                <div className='det' style={{visibility: show?'visible':'hidden', transition:'1s'}}>
                    <div>Are there cracks in the device body ?</div>
                    <div className='ipt' >
                        <div className='rad'>
                        <input className="green-radio" name="cracks"  type="radio" />
                        <label>Yes</label>
                       
                        </div>
                       
                        <div className='rad'>
                        <input className="green-radio" name="cracks"  type="radio" />
                        <label>No</label>
                       
                        </div>
                       
                        </div>
                </div>


            </div>

        </div>

        <button onClick={()=> {setIN(ind+1);
        alert(" Congratulations !! Pick Up is scheduled Successfully !!")}} className='mobibtn'>
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
