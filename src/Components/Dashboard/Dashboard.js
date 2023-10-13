import React from 'react'
import './Dashboard.css';
import pic1 from "../../Images/icon-download.svg";
import pic3 from "../../Images/sidebar-logo.png";
import pic4 from "../../Images/vector.svg" ;
import pic5 from "../../Images/icon-social-group-24px.svg";
import pic6 from "../../Images/icon-quiz.svg";
import pic7 from "../../Images/icon-bulb.png"
import pic8 from "../../Images/icon-settings.svg";
import pic9 from "../../Images/icon-assignments.svg";
import pic10 from "../../Images/line-20-1.svg";
import pic11 from "../../Images/photo-1.png"
import pic12 from "../../Images/graph-2.png";
import pic13 from "../../Images/graph-1.png";
import pic14 from "../../Images/graph.png"
import pic15 from "../../Images/icon-info-circle-line-1.svg"
import pic16 from "../../Images/rectangle-188.svg";
import pic17 from "../../Images/rectangle-189.svg"
import pic18 from "../../Images/rectangle-194.svg" ;
import pic19 from "../../Images/rectangle-195.svg";
import pic20 from "../../Images/rectangle-200.svg"
import pic21 from "../../Images/rectangle-201.svg"
import pic22 from "../../Images/rectangle-206.svg"
import pic23 from "../../Images/rectangle-207.svg"
import pic24 from "../../Images/rectangle-190.svg"
import pic25 from "../../Images/rectangle-191.svg"
import pic26 from "../../Images/rectangle-196.svg"
import pic27 from "../../Images/rectangle-197.svg"
import pic28 from "../../Images/rectangle-202.svg"
import pic29 from "../../Images/rectangle-203.svg" 
import pic30 from "../../Images/rectangle-208.svg"
import pic31 from "../../Images/rectangle-209.svg"

import pic32 from "../../Images/rectangle-192.svg" 
import pic33 from "../../Images/rectangle-193.svg"
import pic34 from "../../Images/rectangle-198.svg"
import pic35 from "../../Images/rectangle-199.svg"
                    
import pic36 from "../../Images/rectangle-204.svg"
import pic37 from "../../Images/rectangle-205.svg"

import pic38 from "../../Images/rectangle-187.svg"
import pic39 from "../../Images/rectangle-186.svg"
import pic40 from "../../Images/line-23.svg"
import pic41 from "../../Images/icons.svg"
import pic42 from "../../Images/group-289204.png"
import pic43 from "../../Images/group-3183708.png"

import pic44 from "../../Images/line-4.svg"
import pic45 from "../../Images/line-3.svg"
import pic46 from "../../Images/line-2.svg"
import pic47 from "../../Images/line-4.svg"
import pic48 from "../../Images/line-3.svg"
import pic49 from "../../Images/line-2.svg"
import pic50 from "../../Images/line-1.svg"
import pic51 from "../../Images/line.svg"
import pic52 from "../../Images/avatar.png"
import pic53 from "../../Images/badge.png"
import pic55 from "../../Images/starUserDashBoard.png"
import pic56 from "../../Images/badgeUserDashBoard.png"
import pic57 from "../../Images/hatUserDashBoard.png"
import pic58 from "../../Images/crownUserDashBoard.png"
import pic59 from "../../Images/diamondUserDashBoard.png"
import pic60 from "../../Images/coinUserDashboard.jpg"






import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';



function Dashboard() {
  return (
    <div>
      <Navbar/>
        <div className="main">
      <div className="div">
        <div className="candidates">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="elston-gullan">West Coast Managers</div>
              <div className="google-inc">66%</div>
              <div className="frond-end-developer">45</div>
              <div className="jun">74%</div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="navigation-header"><div className="title">Personal Information</div></div>
        <div className="group">
          <div className="overlap">
            <img className="icon-download" src={pic1} />
            <div className="text">Download</div>
          </div>
        </div>
        <div className="overlap-2">
          <div className="component-reports">
            <div className="overlap-3">
              <div className="side-nav">
                <div className="frame"><img className="sidebar-logo" src={pic3} /></div>
                <img className="vector" src={pic4}/>
              </div>
              <div className="rectangle"></div>
              <div className="sidebar-menu">Home</div>
              <div className="text-wrapper">Locate</div>
              <div className="icon-people"><img className="icon-social-group" src={pic5} /></div>
              <div className="sidebar-menu-2">Library</div>
              <img className="icon-quiz" src={pic6} />
              <div className="sidebar-menu-3">Blogs</div>
              <img className="icon-bulb" src={pic7} />
              <div className="sidebar-menu-4">Settings</div>
              <img className="icon-settings" src={pic8} />
              <img className="icon-assignments" src={pic9} />
              <img className="line" src={pic10} />
              <input className="name" placeholder="TomerAyush@gmail.com" type="email" />
              <div className="name-2">Ayush Tomer</div>
            </div>
          </div>
          <div className="title-wrapper"><div className="title-2">Recycle X</div></div>
          <img className="photo" src={pic11} />
        </div>
        <div className="overlap-4">
          <div className="group-2">
            <div className="overlap-5">
              <div className="bottom"><div className="subtext">Out of 43</div></div>
              <div className="group-3">
                <div className="small-graph-wrapper">
                  <div className="small-graph"><div className="metric">64</div></div>
                </div>
                <div className="div-wrapper">
                  <div className="small-graph">
                    <div className="metric-2">8</div>
                    <div className="primary-title-wrapper"><div className="primary-title">Coupons Earned</div></div>
                    <img className="graph" src={pic12} />
                  </div>
                </div>
                <div className="overlap-6">
                  <div className="small-graph">
                    <div className="metric-3">+34%</div>
                    <div className="primary-title-wrapper"><div className="primary-title">Knowledge Gain</div></div>
                    <img className="img" src={pic13} />
                  </div>
                </div>
              </div>
              <div className="primary-title-2">Blog Posted</div>
            </div>
            <div className="group-3">
              <div className="small-graph-wrapper">
                <div className="small-graph">
                  <p className="p"><span className="span">27</span> <span className="text-wrapper-2">/80</span></p>
                  <div className="title-3"><div className="primary-title">Quiz Submitted</div></div>
                </div>
              </div>
              <div className="div-wrapper">
                <div className="small-graph">
                  <div className="metric-4">3,298</div>
                  <div className="title-4"><div className="primary-title">Waste Recycled</div></div>
                </div>
              </div>
              <div className="overlap-6">
                <div className="small-graph">
                  <div className="metric-5">41 days</div>
                  <div className="title-5"><div className="primary-title">Credit Point Streaks</div></div>
                </div>
              </div>
            </div>
          </div>
          <img className="graph-2" src={pic14} />
          <img className="icon-info-circle" src={pic15} />
        </div>
        <div className="overlap-7">
          <div className="overlap-8">
            <div className="roxie-ward">JAN</div>
            <img className="rectangle-2" src={pic16} />
            <img className="rectangle-3" src={pic17} />
            <div className="group-4">
              <div className="roxie-ward-2">400</div>
              <div className="roxie-ward-3">300</div>
              <div className="roxie-ward-4">200</div>
              <div className="roxie-ward-5">100</div>
              <div className="roxie-ward-6">0</div>
            </div>
          </div>
          <div className="overlap-9">
            <div className="roxie-ward-7">APR</div>
            <img className="rectangle-4" src={pic18}/>
            <img className="rectangle-5" src={pic19} />
          </div>
          <div className="overlap-10">
            <div className="roxie-ward-8">JUL</div>
            <img className="rectangle-6" src={pic20} />
            <img className="rectangle-7" src={pic21} />
          </div>


          <div className="overlap-11">
            <div className="roxie-ward-9">OCT</div>
            <img className="rectangle-8" src={pic22} />
            <img className="rectangle-9" src={pic23} />
          </div>
          <div className="overlap-12">
            <div className="roxie-ward-8">FEB</div>
            <img className="rectangle-4" src={pic24} />
            <img className="rectangle-10" src={pic25} />
          </div>
          <div className="overlap-13">
            <div className="roxie-ward-10">MAY</div>
            <img className="rectangle-4" src={pic26} />
            <img className="rectangle-11" src={pic27} />
          </div>
          <div className="overlap-14">
            <div className="roxie-ward-11">AUG</div>
            <img className="rectangle-6" src={pic28} />
            <img className="rectangle-12" src={pic29}/>
          </div>
          <div className="overlap-15">
            <div className="roxie-ward-12">NOV</div>
            <img className="rectangle-8" src={pic30} />
            <img className="rectangle-13" src={pic31} />
          </div>
          <div className="overlap-16">
            <div className="roxie-ward-13">MAR</div>
            <div className="overlap-17">
              <img className="rectangle-4" src={pic32}/>
              <img className="rectangle-10" src={pic33} />
            </div>
          </div>
          <div className="overlap-18">
            <div className="roxie-ward-7">JUN</div>
            <img className="rectangle-8" src={pic34} />
            <img className="rectangle-14" src={pic35} />
          </div>
          <div className="overlap-19">
            <div className="roxie-ward-14">SEP</div>
            <img className="rectangle-8" src={pic36} />
            <img className="rectangle-15" src={pic37} />
          </div>
          <div className="overlap-20">
            <div className="roxie-ward-15">DEC</div>
            <img className="rectangle-16" src={pic38} />
            <img className="rectangle-17" src={pic39} />
          </div>
          <div className="text-wrapper-3">Contribution</div>
          <img className="line-2" src={pic40} />
          <div className="overlap-21">
            <div className="text-wrapper-4">Month</div>
            <img className="icons" src={pic41} />
          </div>
        </div>
        <div className="overlap-22">
          <div className="overlap-23">
            <img className="group-5" src={pic42} />
            <div className="group-wrapper">
              <div className="group-6">
                <div className="group-7">
                  <div className="group-6">
                    <div className="group-8">
                      <div className="header-wrapper"><div className="header">Calender</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-24">
                <div className="group-9">
                  <div className="group-6">
                    <div className="group-10">
                      <div className="group-11">
                        <div className="overlap-group-2"><div className="header-2">Total Earned Points</div></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="metric-6">3,298</div>
              </div>
            </div>

            <img className="group-12" src={pic43} />
            <div className="grid">
              <div className="overlap-25">
                <div className="y">
                  <div className="y-axis">
                    <div className="element">60</div>
                    <img className="line-3" src={pic44} />
                  </div>
                  <div className="y-axis">
                    <div className="element">50</div>
                    <img className="line-3" src={pic45} />
                  </div>
                  <div className="y-axis">
                    <div className="element">40</div>
                    <img className="line-3" src={pic46} />
                  </div>
                  <div className="y-axis">
                    <div className="element">30</div>
                    <img className="line-3" src={pic47} />
                  </div>
                  <div className="y-axis">
                    <div className="element">20</div>
                    <img className="line-3" src={pic48} />
                  </div>
                  <div className="y-axis">
                    <div className="element">10</div>
                    <img className="line-3" src={pic49} />
                  </div>
                  <div className="y-axis-2">
                    <div className="text-wrapper-5">0</div>
                    <div className="rectangle-wrapper"><div className="rectangle-18"></div></div>
                  </div>
                </div>
                <div className="x">
                  <div className="x-axis">
                    <div className="TEXT">09/22</div>
                    <div className="line-4"></div>
                    <div className="rectangle-19"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/23</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/24</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/25</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/26</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/27</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/28</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/29</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">09/30</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                  <div className="x-axis-2">
                    <div className="TEXT-2">10/01</div>
                    <div className="line-5"><div className="rectangle-20"></div></div>
                    <div className="rectangle-21"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graphic">
              <div className="overlap-26">
                <img className="line-6" src={pic50} />
                <div className="dot">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-2">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-3">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-4">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-5">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-6">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-7">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-8">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-9">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="dot-10">
                  <div className="overlap-group-3">
                    <div className="ellipse"></div>
                    <div className="ellipse-2"></div>
                  </div>
                </div>
                <div className="graphic-2">
                  <div className="overlap-27">
                    <img className="line-7" src={pic51} />
                    <div className="dot-11">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-12">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-13">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-14">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-15">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-16">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-17">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-18">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-19">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                    <div className="dot-20">
                      <div className="overlap-group-3">
                        <div className="ellipse-3"></div>
                        <div className="ellipse-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="month">
              <div className="grid-2">
                <div className="line-8">
                  <div className="text-wrapper-6"><div className="text-2">10</div></div>
                  <div className="text-wrapper-6"><div className="text-3">Mo</div></div>
                  <div className="text-wrapper-6"><div className="text-3">Tu</div></div>
                  <div className="text-wrapper-6"><div className="text-3">We</div></div>
                  <div className="text-wrapper-6"><div className="text-3">Th</div></div>
                  <div className="text-wrapper-6"><div className="text-3">Fr</div></div>
                  <div className="text-wrapper-6"><div className="text-4">Sa</div></div>
                  <div className="text-wrapper-6"><div className="text-4">Su</div></div>
                </div>
                <div className="line-8">
                 
                  <div className="text-wrapper-6"><div className="text-6">25</div></div>
                  <div className="text-wrapper-6"><div className="text-6">26</div></div>
                  <div className="text-wrapper-6"><div className="text-6">27</div></div>
                  <div className="text-wrapper-6"><div className="text-6">28</div></div>
                  <div className="text-wrapper-6"><div className="text-6">29</div></div>
                  <div className="text-wrapper-6"><div className="text-7">30</div></div>
                  <div className="text-wrapper-6"><div className="text-4">1</div></div>
                </div>
                <div className="line-8">
              
                  <div className="text-wrapper-6"><div className="text-3">2</div></div>
                  <div className="text-wrapper-6"><div className="text-3">3</div></div>
                  <div className="atoms-dey-number"><div className="text-8">4</div></div>
                  <div className="text-wrapper-6"><div className="text-3">5</div></div>
                  <div className="text-wrapper-6"><div className="text-3">6</div></div>
                  <div className="text-wrapper-6"><div className="text-4">7</div></div>
                  <div className="text-wrapper-6"><div className="text-4">8</div></div>
                </div>
                <div className="line-8">
         
                  <div className="text-wrapper-6"><div className="text-3">9</div></div>
                  <div className="text-wrapper-6"><div className="text-3">10</div></div>
                  <div className="text-wrapper-6"><div className="text-3">11</div></div>
                  <div className="text-wrapper-6"><div className="text-3">12</div></div>
                  <div className="text-wrapper-6"><div className="text-3">13</div></div>
                  <div className="text-wrapper-6"><div className="text-4">14</div></div>
                  <div className="text-wrapper-6"><div className="text-4">15</div></div>
                </div>
                <div className="line-8">
        
                  <div className="text-wrapper-6"><div className="text-3">16</div></div>
                  <div className="text-wrapper-6"><div className="text-3">17</div></div>
                  <div className="text-wrapper-6"><div className="text-3">18</div></div>
                  <div className="text-wrapper-6"><div className="text-3">19</div></div>
                  <div className="text-wrapper-6"><div className="text-3">20</div></div>
                  <div className="text-wrapper-6"><div className="text-4">21</div></div>
                  <div className="text-wrapper-6"><div className="text-4">22</div></div>
                </div>
                <div className="line-8">
               
                  <div className="text-wrapper-6"><div className="text-3">23</div></div>
                  <div className="text-wrapper-6"><div className="text-3">24</div></div>
                  <div className="text-wrapper-6"><div className="text-3">25</div></div>
                  <div className="text-wrapper-6"><div className="text-3">26</div></div>
                  <div className="text-wrapper-6"><div className="text-3">27</div></div>
                  <div className="text-wrapper-6"><div className="text-4">28</div></div>
                  <div className="text-wrapper-6"><div className="text-4">29</div></div>
                </div>
                <div className="line-8">
             
                  <div className="text-wrapper-6"><div className="text-3">30</div></div>
                  <div className="text-wrapper-6"><div className="text-3">31</div></div>
                  <div className="text-wrapper-6"><div className="text-6">1</div></div>
                  <div className="text-wrapper-6"><div className="text-6">2</div></div>
                  <div className="text-wrapper-6"><div className="text-6">3</div></div>
                  <div className="text-wrapper-6"><div className="text-7">4</div></div>
                  <div className="text-wrapper-6"><div className="text-7">5</div></div>
                </div>
              </div>
            </div>
            <div className="ellipse-5"><img className="coinGamifi" src={pic60}/></div>
            {/* <div className="header-3">Coin Image</div> */}
          </div>
          <div className="overlap-28">
            <div className="ellipse-6"><img className="gamifiDashboard" src={pic55}/></div>
            <div className="ellipse-7"><img className="gamifiDashboard" src={pic56}/></div>
            <div className="ellipse-8"><img className="gamifiDashboard" src={pic58}/></div>
            <div className="ellipse-9"><img className="gamifiDashboard" src={pic59}/></div>
            <div className="ellipse-10"><img className="gamifiDashboard" src={pic57}/></div>
            <div className="primary-title-3">Contributor</div>
            <div className="primary-title-4">Professional</div>
            <div className="primary-title-5">Scholar</div>
            <div className="primary-title-6">Master</div>
            <div className="primary-title-7">Ace</div>
          </div>
        </div>
        <div className="overlap-29">
          <div className="group-13">
            <div className="overlap-30">
              <div className="header-4">Total Earned Points</div>
              <div className="header-5">Total Earned Points</div>
            </div>
          </div>
          <div className="navigation-header-2"><div className="title">Ayush Tomar</div></div>
          <div className="ellipse-11"></div>
          <div className="lable">
            <div className="overlap-31">
              <div className="overlap-32">
                <img className="vector-2" src={pic52} />
                <div className="text-wrapper-7">Video Ads</div>
                <div className="text-wrapper-8">Union Ads</div>
                <div className="text-wrapper-9">Direct</div>
                <img className="badge" src={pic53} />
              </div>
              <div className="text-wrapper-10">Email</div>
            </div>
            <div className="text-wrapper-11">Search Engine</div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </div>
  )
}



export default Dashboard
