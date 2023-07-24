import React from 'react';
import Factory from '../../../components/TemplateData.json'

function ContinentalBlue() {
 
  return (
    <div>
        <h1>{ Factory && Factory[3].title }</h1>
        <p>Doing Business As: { Factory && Factory[3].title }</p>
        <p>Company Description: { Factory && Factory[3].description }</p>
        <p>Key Principal: { Factory && Factory[3]['key principal'] }</p>
        <p>Industry: { Factory && Factory[3].industry }</p>
        <p>Popular Search: { Factory && Factory[3].search }</p>
        <p>Address: { Factory && Factory[3].address}</p>
        <p>Phone: { Factory && Factory[3].phone }</p>
        <p>Website: { Factory && Factory[3].website }</p>
        <p>Employees (this site): { Factory && Factory[3].employees }</p>
        <p>Revenue: { Factory && Factory[3].revenue }</p>
        <p>Year Started: { Factory && Factory[3].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[3]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default ContinentalBlue