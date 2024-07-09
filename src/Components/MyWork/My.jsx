import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.jpg';
import mywork_data from '../../assets/mywork_data'; // No curly braces
import arrow_icon from '../../assets/arrow_icon.jpg';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className='mywork-title'>
            <h1>My latest Work</h1>
            <img src={theme_pattern} alt="Theme pattern" />
        </div>
        <div className='mywork-container'>
            {mywork_data.map((work, index) => (
                <img key={index} src={work.w_img} alt={`Work ${index}`} />
            ))}
        </div>
        
        <div className='mywork-showmore'>
          <p>Show More</p>
          <img src={arrow_icon} alt="" style={{ width: '60px', height: '30px'}}/>
        </div>
    </div>
  );
}

export default MyWork;
