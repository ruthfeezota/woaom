import React from 'react';
import Navbar from '../../components/Navbar';
import './BrandName.css'
import BrandNew from '../../Assets/Img/shoes.jpg'
import FactoryContact from '../../components/Contact/FactoryContact';




function BrandName() {
  return (
    <>
    <Navbar/>
    <div className="image-banner">
      <img
        className="banner-image"
        src={BrandNew}
        alt="Banner Image"
      />
      <div className="banner-content">
        <h2 className="banner-heading">Name Brand Shoes</h2>
        <h2 className="banner-p">African Street Wear</h2>
        <div className="button-container">
            <a href='/products'>
          <button className="banner-button">Our Products</button>
          </a>
          {/* <button className="banner-button">Contact Us</button> */}
        </div>
      </div>
    </div>
    <div className='product-container'>
        <div>
        <p>Products</p>
        </div>
    </div>
    
    <FactoryContact />
    </>
  )
}

export default BrandName
