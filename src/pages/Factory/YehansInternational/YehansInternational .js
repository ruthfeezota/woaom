import React from 'react';
import Factory from '../../../components/TemplateData.json'

function YehansInternational() {
 
  return (
    <div>
        <h1>{ Factory && Factory[9].title }</h1>
        <p>Doing Business As: { Factory && Factory[9].title }</p>
        <p>Company Description: { Factory && Factory[9].description }</p>
        <p>Key Principal: { Factory && Factory[9]['key principal'] }</p>
        <p>Industry: { Factory && Factory[9].industry }</p>
        <p>Popular Search: { Factory && Factory[9].search }</p>
        <p>Address: { Factory && Factory[9].address}</p>
        <p>Phone: { Factory && Factory[9].phone }</p>
        <p>Website: { Factory && Factory[9].website }</p>
        <p>Employees (this site): { Factory && Factory[9].employees }</p>
        <p>Revenue: { Factory && Factory[9].revenue }</p>
        <p>Year Started: { Factory && Factory[9].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[9]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default YehansInternational