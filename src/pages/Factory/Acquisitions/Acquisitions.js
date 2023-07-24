import React from 'react';
import './Acquisitions.css';
import Factory from '../../../components/TemplateData.json'

function Acquisitions() {
 
  return (
    <div>
        <h1>{ Factory && Factory[0].title }</h1>
        <p>Doing Business As: { Factory && Factory[0].title }</p>
        <p>Company Description: { Factory && Factory[0].description }</p>
        <p>Key Principal: { Factory && Factory[0]['key principal'] }</p>
        <p>Industry: { Factory && Factory[0].industry }</p>
        <p>Popular Search: { Factory && Factory[0].search }</p>
        <p>Address: { Factory && Factory[0].address}</p>
        <p>Phone: { Factory && Factory[0].phone }</p>
        <p>Website: { Factory && Factory[0].website }</p>
        <p>Employees (this site): { Factory && Factory[0].employees }</p>
        <p>Revenue: { Factory && Factory[0].revenue }</p>
        <p>Year Started: { Factory && Factory[0].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[0]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default Acquisitions