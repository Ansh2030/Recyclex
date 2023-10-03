
import React, { useEffect, useState } from 'react';
import './Landing.css';
// import javas from "../Components/homeAnimation";
// import { useEffect } from 'react';
import mainpic from "../Images/mainphoto.jpg";
import abes from "../Images/Abes.jpg";
import a1 from "../Images/VIET.jpg"
import a2 from "../Images/Kiet.jpg";
import a3 from "../Images/Vice.jpg";
import a4 from "../Images/phillips.jpg"
import a5 from "../Images/Boat.jpg"
import a6 from "../Images/xiaomi.jpg";
import { useUserAuth } from '../Context/UserAuthContext';

function Landing() {

    const {user} = useUserAuth();
  return ( 
    user?
<>
<a href="HOME"></a>
    <div class="main">

    {/* <!-- ++ CONTENT-ON-LANDING-PAGE +++  -->
    <!-- "Turning Trash into Treasure: Where Innovation Meets Conservation" --> */}
    

        <div className="content-container">
            <div>
                <div className="content-head-cont">
                    <h2 className="content-head">Electronic <span>Waste</span></h2>
                </div>
    
                <div className="content-quote-cont">
                    <p className="quote"> E-waste, once discarded, now holds the potential to be reborn as valuable components, exemplifying the inherent capacity for renewal and transformation.In the world of electronics, yesterday's trash becomes tomorrow's treasure through the magic of e-waste recycling <span> Trash To Treasure</span>
                                       </p>
                </div>
            </div>


            <div className="content-2-cont">
                <div className="content-2">
                    <p>This platform is committed to aiding you in liberating discarded electronics from harmful disposal practices and promoting their responsible recycling, contributing to a sustainable environment.".</p>
                </div>

                <div className="explore-btn-cont">
                    <a href="#SECTION_2"><button className="explore-btn">Explore</button></a>
                    <a href="otherHTML/statistics.html"><button className="blog-btn">Statistics</button></a>
                </div>

            </div>
        </div>

        <div className="illustration-cont">
          
            <div>
                <img src={mainpic} alt="" width="900px" height="800px"/>
            </div>
        </div>

    </div>


    {/* <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
    +++++++++++                   SECTION-2                         ++++++++
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-->
    <!-- "HERE ARE SOME PROVEN WAYS TO CARE FOR OUR PLANET THROUGH RESPONSIBLE E-WASTE MANAGEMENT." --> */}

    <a id="SECTION_2"></a>

    <div className="section-2">

        <div className="section-2-head-cont">
            <h2 className="section-2-head">Here Are Some Proven Ways To Care For Our Planet Through Responsible<span> E-WASTE MANAGEMENT</span>.</h2>
        </div>


        <div className="card-container">
            
            
            <div className="card card-1 appear">
                <div className="card-content-cont">
                    <h3 className="card-head">Marketplace</h3>
                    <p className="card-text">
                        "Elevate Your E-Waste Experience: Discover the Marketplace for a Sustainable Future." <br/>
                        <span className="link-cont">
                            <a href="#">Learn more</a>
                            <i className="fas fa-long-arrow-alt-right arrow"></i>
                        </span>
                    </p>
                </div>

            </div>

            <div className="card card-2 appear">
                <div className="card-content-cont">
                    <h3 className="card-head">E waste Facility locator </h3>
                    <p className="card-text">
                        "Find Your Nearest E-Waste Facility: Easy, Quick, Sustainable." <br/>
                        <span className="link-cont">
                            <a href="#">Learn more</a>
                            <i className="fas fa-long-arrow-alt-right arrow"></i>
                        </span>
                    </p>
                </div>
            </div>

            <div className="card card-3 appear">
                <div className="card-content-cont">
                    <h3 className="card-head">OLD DEVICE REPLACEMENT</h3>
                    <p className="card-text">"Upgrade Your Tech, Transform Your World: Seamless Old Device Replacement." <br/>
                        <span className="link-cont">
                            <a href="#">Learn more</a>
                            <i className="fas fa-long-arrow-alt-right arrow"></i>
                        </span>
                    </p>
                </div>
            </div>

            <div className="card card-4">
                <div className="card-content-cont">
                    <h3 className="card-head">EDUCATIONAL POPS</h3>
                    <p className="card-text">"Educational Insights at Your Fingertips: Discover Informative Pop-ups."  <br/>
                        <span className="link-cont">
                            <a href="#">Learn more</a>
                            <i className="fas fa-long-arrow-alt-right arrow"></i>
                        </span>
                        
                    </p>
                </div>
            </div>

        </div>


        <div className="more-activities-cont">
            <div className="more-content-head">
                <p>OUR PARTENERS</p>
            </div>

            <div className="more-content-card-cont">
                
                <div className="more-card">

                    <div className="actual-card">
                        <div>
                            <img src={abes} alt="sleep" width="50px" height="50px"/>
                        </div>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>ABES ENGINEERING COLLEGE</p> --> */}
                    </div>
                </div>
                
                <div className="more-card">

                    <div className="actual-card">
                        <img src={a2} alt="sleep" width="50px" height="50px"/>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>Keep Hydrated</p> --> */}
                    </div>
                </div>
                
                <div className="more-card">

                    <div className="actual-card">
                        <img src={a1} alt="sleep" width="50px" height="50px"/>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>Sunshine</p> --> */}
                    </div>
                </div>
                
                <div className="more-card">

                    <div className="actual-card">
                        <img src={a3} alt="sleep" width="50px" height="50px"/>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>Head Outside</p> --> */}
                    </div>
                </div>
                
                <div className="more-card">

                    <div className="actual-card">
                        <img src={a4} alt="sleep" width="50px" height="50px"/>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>laugh</p> --> */}
                    </div>
                </div>
                
                <div className="more-card">

                    <div className="actual-card">
                        <img src={a5} alt="sleep" width="50px" height="50px"/>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>Gratitude</p> --> */}
                    </div>
                </div>
                
                <div className="more-card">

                    <div className="actual-card">
                        <img src={a6} alt="sleep" width="50px" height="50px"/>
                    </div>

                    <div className="more-card-content">
                        {/* <!-- <p>Temptations</p> --> */}
                    </div>
                </div>
            </div>
        </div>



    </div>




    {/* <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
    +++++++++++                   SECTION-3                       +++++++++++ 
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--> */}

     
    <div className="section-3-cont" id="SECTION-3">

        <div className="take-page-content-cont">

            <div className="talk-page-content">
                <div>
                    <h2>Lets Join To Build The Better India Together </h2>
                    {/* <!-- <h2></> --> */}
                    <p>
                        RecycleX team believes that achieving a waste-free India is an ambitious yet attainable goal. We firmly believe that every small step towards this objective counts. We are delighted to see the growing popularity of the zero waste philosophy across the country. Let's learn about zero waste together and work hand in hand to create a better India.
                    </p>

                    <p>
                        Talking can be a way to cope with a problem you've been carrying around in your head for a while.
                         Just being listened to can help you feel supported and less alone. And it works both ways.
                          If you open up, it might encourage others to do the same.
                    </p>
                </div>

                <div>
                    <h2>Chat Bot</h2>

                    <p>
                        If you're seeking guidance or have inquiries about e-waste and its implications, our knowledgeable chatbot is at your service.
                    </p>
                    <button className="take-me-there-btn" id="chat-bot-page-portal-btn">Take me there <i className="fas fa-long-arrow-alt-right take-there-arrow"></i></button>
                </div>
            </div>

            <div className="take-page-img-cont">

            </div>

        </div>

    </div>



    
{/*     
    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
    +++++++++++                   FOOTER                         +++++++++++ 
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++--> */}

    <a id="FOOTER"></a>
    <div className="footer">
        <div className="footer-text-cont">
            <div>
                <h2>GET IN TOUCH.</h2>
                <p>We're here to assist you in your journey toward responsible e-waste management.</p>
            </div>

            <div className="author-contribution-cont">
                <p className="attribute-text">Attribute to author</p>

                <div className="actual-author-contribution-cont">
                    <div className="attributes-head-cont">
                        <p>
                            I've Used some free images from Flaticon and freepik,
                            So here is the attribute for the authors.
                        </p>

                        <i className="fas fa-times cross"></i>
                    </div>
   

                    <ul className="contribution-list">
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                        <li><div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="social-icon-cont">
            <div className="social-head">
                <h2 className="logo footer-logo">RecycleX.</h2>
            </div>

            <div className="icons">
                <ul>
                    <li><a href="https://github.com/DhruvSharmaDev"><i className="fab fa-github-square"></i></a></li>
                    <li><a href="mailto:sharmadhruv1303@gmail.com" target="_blank"><i className="far fa-envelope"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/dhruvsharma03/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>

        <p className="copy-rights">Thank You for Supporting Responsible E-Waste Management :</p>
    </div>



   </>:
   <div>signIN first</div>
  )
}

export default Landing
