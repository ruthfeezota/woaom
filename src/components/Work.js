import React from "react";
import PickMeals from "../Assets/5.png";
import ChooseMeals from "../Assets/6.png";
import Contracts from "../Assets/7.png"
import './Work.css'



const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "",
      text: "Identify opportunities, manage savings, make purchases and payments, all through a unified procurement platform",
    },
    {
      image: ChooseMeals,
      title: "",
      text: "Boost adoption and drive enterprise-wide compliance with intelligent, intuitive interfaces and user-centric design",
    },
    {
      image: Contracts,
      title: "",
      text: "Manage all source-to-pay processes on the go with a mobile-native design – anytime, anywhere, any device",
    }

  ];
  return (
    <div className="work-section-wrapper-work" id="work">
      <div className="work-section-top">
        <h1 className="primary-heading"> Woaom is an all-in-one Procurement Management Solution</h1>
        <p className="primary-text">
        Everything you need to streamline your purchasing process to gain spend visibility, improve efficiencies, and cut costs. Let Tradogram unlocks reliable spend data so you can focus on what matters.
        </p>
      </div>
      <div className="work-section-bottom-1">
        {workInfoData.map((data) => (
          <div className="work-section-info-1" key={data.title}>
            <div className="info-boxes-img-container-1">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <p className="primary-text-black">{data.text}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Work;
