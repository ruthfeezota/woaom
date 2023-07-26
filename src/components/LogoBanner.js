import React from 'react';
import './LogoBanner.css'
import Logo1 from '../Assets/comlogo1.png'
import Logo2 from '../Assets/comlogo2.png'
import Logo3 from '../Assets/comlogo3.png'
import Logo4 from '../Assets/comlogo4.png'
import Logo6 from '../Assets/comlogo6.png'
import Logo7 from '../Assets/comlogo7.png'


function LogoBanner() {
  return (
<div id='scroll-container'>
    <div id="scroll-img">
    <img src={Logo1} alt='Logo'/>
    </div>
    <div id="scroll-img">
    <img src={Logo2} alt='Logo'/>
    </div>
    <div id="scroll-img">
    <img src={Logo3} alt='Logo'/>
    </div>
    <div id="scroll-img">
    <img src={Logo4} alt='Logo'/>
    </div>
    <div id="scroll-img">
    <img src={Logo6} alt='Logo'/>
    </div>
    <div id="scroll-img">
    <img src={Logo7} alt='Logo'/>
    </div>


</div>

  )
}

export default LogoBanner