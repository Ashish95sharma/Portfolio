import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.jpg';
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.jpg';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className='services-title'>
            <h1> My Projects</h1>
            <img src={theme_pattern} alt="" />
            
        </div>
        <div className='services-container'>
          {Services_Data.map((service,index)=>{
            return (<div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className='services-readmore'>
                  <p>Link</p>
                  <a href={service.s_link} target="_blank" rel="noopener noreferrer">
                     <img src={arrow_icon} alt="" />
                  </a>
              </div>
            </div>)
          })}

        </div>
    </div>
  )
}

export default Services