import React from 'react'
import './Projects.css'
import {Link} from 'react-router-dom'
import Comp from './Comp.jsx';
import pic1 from './assets/ecom.jpg'
import pic2 from './assets/weather.jpg'
import pic3 from './assets/portfolio.jpg'

function Projects() {
  const des = ['"React E-Commerce Emporium" is a full-fledged e-commerce website that showcases your expertise in frontend development using the React library. This comprehensive project is designed to provide users with a seamless online shopping experience', 
               'A React-based portfolio project that showcases my projects and resume. This interactive portfolio offers visitors a comprehensive overview of my skills, experiences, and accomplishments, with the ability to explore individual projects in detail.', 
               'WeatherCast is a web application designed to keep users informed about current and future weather conditions for their desired locations. It harnesses the power of JavaScript, along with web technologies.']
  return (
    <div id='Proj_home'>
      <div className="p_head">
        <div className='head'>
            <span style={{padding:'10px', backgroundColor:'#014DFD', marginRight:'5px'}}></span>
            <div className='resume'><p>PROJECTS</p></div>
        </div>
      </div>
      <div className="container">
        <div className='p_all_cont'>
            <Comp heading = 'E-commerce (React)' desc = 'Front-end part of E-comm' des = {des[0]} link = 'https://kumazon-react.netlify.app/' picture = {pic1} />
            <Comp heading = 'Portfolio (React)' desc = 'Showcase of CV and proj' des = {des[1]} link = '/' picture = {pic3}/>
            <Comp heading = 'Weather forecast' desc = 'Forecast current weather' des = {des[2]} link = 'https://weather-forecastingjs.netlify.app/' picture = {pic2} />
        </div>
        <div className='p_foo'>
          <Link to='/'><button className='p_but'>Back to home</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects;
