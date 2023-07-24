import React from 'react';
import Factory from '../../../components/TemplateData.json'

function Justmoh() {
  return (
    <div>
        <h1>{ Factory && Factory[2].title }</h1>
        <p>Doing Business As: { Factory && Factory[2].title }</p>
        <p>Company Description: { Factory && Factory[2].description }</p>
        <p>Key Principal: { Factory && Factory[2]['key principal'] }</p>
        <p>Industry: { Factory && Factory[2].industry }</p>
        <p>Popular Search: { Factory && Factory[2].search }</p>
        <p>Address: { Factory && Factory[2].address}</p>
        <p>Phone: { Factory && Factory[2].phone }</p>
        <p>Website: { Factory && Factory[2].website }</p>
        <p>Employees (this site): { Factory && Factory[2].employees }</p>
        <p>Revenue: { Factory && Factory[2].revenue }</p>
        <p>Year Started: { Factory && Factory[2].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[2]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default Justmoh