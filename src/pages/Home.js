import React from "react";
import "./Home.css";
import Factory from "../components/Factory";
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.ibb.co/3C2Shvs/home-Page-Cover-1.png"
          alt=""
        />
       
        <div className="home__row">
          <Factory
            id="12321341"
            title="Larana, INC."
            rating={5}
            image="https://i.ibb.co/PTQTLfY/7.png"
          />
          <Factory
            id="49538094"
            title="Morgan Maxwell"
            rating={4}
            image="https://i.ibb.co/HKHp6Np/6.png"
          />
        </div>

        <div className="home__row">
          <Factory
            id="4903850"
            title="Happy Factory"
            rating={3}
            image="https://i.ibb.co/Pwnc4Jm/5.png"
          />
          <Factory
            id="23445930"
            title="CURA Engineering"
            price={98.99}
            rating={5}
            image="https://i.ibb.co/QKJPpzg/4.png"
          />
          <Factory
            id="3254354345"
            title="Salford @ CO Engineering"
            rating={4}
            image="https://i.ibb.co/zhggBgv/3.png"
          />
        </div>
        <Footer/>

        
      </div>
    </div>
    );
};

export default Home;