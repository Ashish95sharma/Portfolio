import React from 'react'
import './About.css'
import profile_imgs from '../../assets/profile_imgs.jpg';
import theme_pattern from '../../assets/theme_pattern.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1> About me</h1>
            <img src={theme_pattern} alt=" " />

        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_imgs} alt="" />
            </div>
        <div className="about-right">
            <div className="about-para">
                <p> I am a fresher and ready to grab new opportunity to build my skill and increase my market value</p>
                <p>My passion for frontend development is not only limited to this skill but I learn new technology also.</p>
            </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>SQL</p><hr style={{width:"50%"}}/></div>
        </div>
        </div>
       
        </div>
        <div className='about-achievements'>
            <div className="about-achievement">
                <h1>200+</h1>
                <p>SOLVED ON LEETCODE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5+</h1>
                <p>CERTIFICATION ON WEB DEVELOPMENT</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>75 </h1>
                <p>PERCENTAGE IN B.TECH</p>
            </div>
        </div>
    </div>
    
  )
}

export default About