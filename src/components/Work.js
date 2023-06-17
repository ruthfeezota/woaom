import React from "react";
import PickMeals from "../Assets/about-background-image-4.png";
import ChooseMeals from "../Assets/choose-image.png";
import Contracts from "../Assets/supplier-discovery-image.png"
import './Work.css'



const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Supplier Discovery",
      text: "Tell us your requirements, hit search and explore a list of new suppliers in just a few minutes",
    },
    {
      image: ChooseMeals,
      title: "Reporting",
      text: "Actionable and informative insights on your RFx processes - enabling you yo make informed decisions",
    },
    {
      image: Contracts,
      title: "Contracts",
      text: "Create contracts from your awarded RFPs and experience efficient and auditable source to contract processes",
    },

  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <h1 className="primary-heading">Our Products</h1>
        <p className="primary-text">
        We pack our procurement platform with all of the core features you need to save time, reduce your spend and transact with confidence
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Work;
