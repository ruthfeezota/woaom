import React from 'react';
import Factory from '../../../components/TemplateData.json'

function CasaTrasacco() {
 
  return (
    <div>
        <h1>{ Factory && Factory[6].title }</h1>
        <p>Doing Business As: { Factory && Factory[6].title }</p>
        <p>Company Description: { Factory && Factory[6].description }</p>
        <p>Key Principal: { Factory && Factory[6]['key principal'] }</p>
        <p>Industry: { Factory && Factory[6].industry }</p>
        <p>Popular Search: { Factory && Factory[6].search }</p>
        <p>Address: { Factory && Factory[6].address}</p>
        <p>Phone: { Factory && Factory[6].phone }</p>
        <p>Website: { Factory && Factory[6].website }</p>
        <p>Employees (this site): { Factory && Factory[6].employees }</p>
        <p>Revenue: { Factory && Factory[6].revenue }</p>
        <p>Year Started: { Factory && Factory[6].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[6]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default CasaTrasacco