import React from 'react';
import Factory from '../../../components/TemplateData.json'

function CityPaints() {
 
  return (
    <div>
        <h1>{ Factory && Factory[4].title }</h1>
        <p>Doing Business As: { Factory && Factory[4].title }</p>
        <p>Company Description: { Factory && Factory[4].description }</p>
        <p>Key Principal: { Factory && Factory[4]['key principal'] }</p>
        <p>Industry: { Factory && Factory[4].industry }</p>
        <p>Popular Search: { Factory && Factory[4].search }</p>
        <p>Address: { Factory && Factory[4].address}</p>
        <p>Phone: { Factory && Factory[4].phone }</p>
        <p>Website: { Factory && Factory[4].website }</p>
        <p>Employees (this site): { Factory && Factory[4].employees }</p>
        <p>Revenue: { Factory && Factory[4].revenue }</p>
        <p>Year Started: { Factory && Factory[4].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[4]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default CityPaints