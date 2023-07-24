import React from 'react';
import Factory from '../../../components/TemplateData.json'

function AsuogyamanCompany() {
 
  return (
    <div>
        <h1>{ Factory && Factory[7].title }</h1>
        <p>Doing Business As: { Factory && Factory[7].title }</p>
        <p>Company Description: { Factory && Factory[7].description }</p>
        <p>Key Principal: { Factory && Factory[7]['key principal'] }</p>
        <p>Industry: { Factory && Factory[7].industry }</p>
        <p>Popular Search: { Factory && Factory[7].search }</p>
        <p>Address: { Factory && Factory[7].address}</p>
        <p>Phone: { Factory && Factory[7].phone }</p>
        <p>Website: { Factory && Factory[7].website }</p>
        <p>Employees (this site): { Factory && Factory[7].employees }</p>
        <p>Revenue: { Factory && Factory[7].revenue }</p>
        <p>Year Started: { Factory && Factory[7].yearStarted }</p>
        <p>ESG ranking: { Factory && Factory[7]['ESG ranking:'] }</p>

        <a href='./Acquisitions.js'>
        <p>What is D&B's ESG Ranking?</p>
        </a>

    </div>
  )
}

export default AsuogyamanCompany