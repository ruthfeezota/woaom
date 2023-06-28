import React from "react";
import "../App.css"
import "../components/Work"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Home() {
  return(
<Carousel autoPlay interval="5000" 
                 transitionTime="5000" showThumbs={false} showStatus={false}>
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" />
        <h1 className="primary-heading">Enter Interface</h1>
        <button className="outline-home-button">
                USERS
              </button>
              <button className="outline-home-button">
                MANUFACTURER
              </button>
        
      </div>
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" />
        <h1 className="primary-heading">Enter Interface</h1>
        <button className="outline-home-button">

                User Interface
              </button>
        
      </div>
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" />
        <h1 className="primary-heading">Enter Interface</h1>
        <button className="outline-home-button">
                User Interface
              </button>
      </div>
  
    </Carousel>
    

    );
  
};




export default Home;