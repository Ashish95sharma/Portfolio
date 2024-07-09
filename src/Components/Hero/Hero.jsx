import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
        <div id='home' className='hero'>
             <img src={profile_img} alt=""  />
             <h1><span>I am Ashish Kumar Sharma,</span> frontend developer having expertise in React, JavaScript and DSA; </h1>
              <p>I am graduated from Kiet group of Institution from CSE Branch with an aggregate percentage of 75%(2020-2024)</p>
              <div className='hero-action'>
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
                <div className="hero-resume" >
                <a href="https://drive.google.com/file/d/1PIbo5c383xiBFp_pHpmRmHGbHGFVm1w8/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume</a>
                </div>
              </div>
    </div>
  )
}

export default Hero;