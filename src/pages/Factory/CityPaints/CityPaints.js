import React from "react";
import "../Acquisitions/Acquisitions.css";
import Factory from "../../../components/TemplateData.json";


function Acquisitions() {
  return (
    <div className="banner-main-container">
      <div className="factory-img-banner" >
      <h1 className="factory-title">{Factory && Factory[4].title}</h1>
      <button className="outline-home-button-banner-1">View Products</button>
      </div>

      <div className="factory-container">
        {/* <div className="factory-title-container col-md-8">
          <h3 className="factory-title">{Factory && Factory[4].title}</h3>
        </div> */}
        <div className="margin-between-row pt-5 col-md-12">
          <h1 className="factory-overview-text">Overview</h1>
        </div>
        <div className="margin-between-row">
          <p className="factory-title-1">
            Doing Business As: {Factory && Factory[4].title}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-description">
            Company Description: {Factory && Factory[4].description}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-key">
            Key Principal: {Factory && Factory[4]["key principal"]}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-industry">
            Industry: {Factory && Factory[4].industry}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-search">
            Popular Search: {Factory && Factory[4].search}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-address">
            Address: {Factory && Factory[4].address}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-phone">Phone: {Factory && Factory[4].phone}</p>
        </div>

        <div className="margin-between-row">
          <p className="factory-website">
            Website: {Factory && Factory[4].website}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-employees">
            Employees (this site): {Factory && Factory[4].employees}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-revenue">
            Revenue: {Factory && Factory[4].revenue}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-yearstarted">
            Year Started: {Factory && Factory[4].yearStarted}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-ranking">
            ESG ranking: {Factory && Factory[4]["ESG ranking:"]}
          </p>
        </div>

        <div className="margin-between-row">
          <a href="./Acquisitions.js">
            <p>What is D&B's ESG Ranking?</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Acquisitions;
