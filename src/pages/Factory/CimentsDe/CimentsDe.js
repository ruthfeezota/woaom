import React from 'react';
import Factory from '../../../components/TemplateData.json'

function CimentsDe() {
  console.log(Factory)
  return (
    <div>
        <h1>{ Factory && Factory[1].title }</h1>
        <p>Doing Business As: { Factory && Factory[1].title }</p>
        <p>Company Description: { Factory && Factory[1].description }</p>
        <p>Key Principal: { Factory && Factory[1]['key principal'] }</p>
        <p>Industry: { Factory && Factory[1].industry }</p>
        <p>Popular Search: { Factory && Factory[1].search }</p>
        <p>Address: { Factory && Factory[1].address}</p>
        <p>Phone: { Factory && Factory[1].phone }</p>
        <p>Website: { Factory && Factory[1].website }</p>
        <p>Employees (this site): { Factory && Factory[1].employees }</p>
        <p>Revenue: { Factory && Factory[1].revenue }</p>
        <p>Year Started: { Factory && Factory[1].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[1]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default CimentsDe