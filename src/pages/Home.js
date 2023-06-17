import React from "react";
import "../App.css"
import "../components/Work"
import Footer from '../components/Footer'
import Work from "../components/Work";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png"
          alt=""
        />
       <Work/>

        <Footer/>


      </div>
    </div>
    );
};

export default Home;