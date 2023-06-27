import React from "react";
import "../App.css"
import "../components/Work"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function Home() {
  return (
<Carousel autoPlay interval="5000" 
                 transitionTime="5000" showThumbs={false}>
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" />
       
      </div>
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" />
        
      </div>
      <div>
        <img src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png" />
      </div>
  
    </Carousel>
    

    );
  
};




export default Home;