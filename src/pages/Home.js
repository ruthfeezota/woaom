import React from "react";
import './Home.css'
import "../components/Work"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Home() {
  return(
    <div className="banner-text-container" >
<Carousel autoPlay interval="5000" 
                 transitionTime="5000" showThumbs={false} showStatus={false} >
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" alt="phot"/>
        <h1 className="primary-heading-banner">ENTER INTERFACE</h1>
        <button className="outline-home-button-banner">
                USERS
              </button>
              <button className="outline-home-button-banner-2">
                MANUFACTURER
              </button>

              
        
      </div>
      <div>
        <img src="https://i.ibb.co/k2tmbFy/photo6.jpg" alt="phot" />
        <h1 className="primary-heading-banner">Enter Interface</h1>
        <button className="outline-home-button-banner">
                User Interface
              </button>
        
      </div>

  
    </Carousel>
    </div>

    );

};

export default Home;