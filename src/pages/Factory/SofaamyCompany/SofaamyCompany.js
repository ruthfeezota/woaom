import React from 'react';
import Factory from '../../../components/TemplateData.json'

function SofaamyCompany() {
 
  return (
    <div>
        <h1>{ Factory && Factory[8].title }</h1>
        <p>Doing Business As: { Factory && Factory[8].title }</p>
        <p>Company Description: { Factory && Factory[8].description }</p>
        <p>Key Principal: { Factory && Factory[8]['key principal'] }</p>
        <p>Industry: { Factory && Factory[8].industry }</p>
        <p>Popular Search: { Factory && Factory[8].search }</p>
        <p>Address: { Factory && Factory[8].address}</p>
        <p>Phone: { Factory && Factory[8].phone }</p>
        <p>Website: { Factory && Factory[8].website }</p>
        <p>Employees (this site): { Factory && Factory[8].employees }</p>
        <p>Revenue: { Factory && Factory[8].revenue }</p>
        <p>Year Started: { Factory && Factory[8].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[8]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default SofaamyCompany