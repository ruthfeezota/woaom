import React from "react";
import "../Acquisitions/Acquisitions.css";
import Factory from "../../../components/TemplateData.json";


function Acquisitions() {
  return (
    <div className="banner-main-container">
      <div className="factory-img-banner" >
      <h1 className="factory-title">{Factory && Factory[5].title}</h1>
      <button className="outline-home-button-banner">View Products</button>
      </div>

      <div className="factory-container">
        {/* <div className="factory-title-container col-md-8">
          <h3 className="factory-title">{Factory && Factory[5].title}</h3>
        </div> */}
        <div className="margin-between-row pt-5 col-md-12">
          <h1 className="factory-overview-text">Overview</h1>
        </div>
        <div className="margin-between-row">
          <p className="factory-title-1">
            Doing Business As: {Factory && Factory[5].title}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-description">
            Company Description: {Factory && Factory[5].description}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-key">
            Key Principal: {Factory && Factory[5]["key principal"]}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-industry">
            Industry: {Factory && Factory[5].industry}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-search">
            Popular Search: {Factory && Factory[5].search}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-address">
            Address: {Factory && Factory[5].address}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-phone">Phone: {Factory && Factory[5].phone}</p>
        </div>

        <div className="margin-between-row">
          <p className="factory-website">
            Website: {Factory && Factory[5].website}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-employees">
            Employees (this site): {Factory && Factory[5].employees}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-revenue">
            Revenue: {Factory && Factory[5].revenue}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-yearstarted">
            Year Started: {Factory && Factory[5].yearStarted}
          </p>
        </div>

        <div className="margin-between-row">
          <p className="factory-ranking">
            ESG ranking: {Factory && Factory[5]["ESG ranking:"]}
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
