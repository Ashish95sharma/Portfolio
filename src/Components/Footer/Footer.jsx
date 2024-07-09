import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpg'
import user_icon from '../../assets/user_icon.svg'; 
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
                <img src={logo} alt="" style={{ width: '130px', height: '70px' }}/>
            </div>
           
        </div>
        <hr/>
        <div className='footer-bottom'>
            <p className='footer-bottom-left'> 2024, Ashish kumar Sharma</p>
            
          
        </div>
    </div>
  )
}

export default Footer