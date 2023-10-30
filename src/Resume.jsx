// import React from 'react'
import './Resume.css';
import {Link} from 'react-router-dom';

export default function Resume() {
  const skill = {
    height:'85%',
    width:'85%',
    display:'flex',
    flexDirection:'column',
    // alignItems:'center',
    justifyContent:'space-evenly'
  }
  return (
    <div id="home" >
      <div className='head'>
          <span style={{padding:'10px', backgroundColor:'#014DFD', marginRight:'5px'}}></span>
          <div className='resume'><p>RESUME</p></div>
      </div>
      <div className='container'>
        <div className='all_cont'>
          <div className="education">
            <div className="edu">
              <p>EDUCATION</p>
            </div>
            <div className="box">
              <div className="hsc">
                <p style={{fontSize:'26px'}}>HSC</p>
                <p>PKP swamy matric higher secondary school,Erode <br /> Percentage : <b>77%</b> (08/2019-05/2020)</p>
              </div>
              <div className="sslc">
                <p style={{fontSize:'26px'}}>SSLC</p>
                <p>PKP swamy matric higher secondary school,Erode <br /> Percentage : <b> 82.6%</b> (05/2017-04/2018)</p>
            </div>
            </div>
          </div>
          <div className="skill_set">
            <div className="edu">
              <p>SKILL_SET</p>
            </div>
            <div className="box">
              <div className='ss' style={skill}>
                <div className="hsc_ss">
                  <p style={{fontSize:'26px', fontFamily:'sans-serif',fontWeight:'bold'}}>Languages</p>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                      <p> <span></span> C/C++ </p>
                      <p> <span></span> JAVA</p> 
                      <p> <span></span> HTML & CSS </p>
                    </div>
                </div>
                <div className="sslc_ss">
                  <p style={{fontSize:'26px', fontFamily:'sans-serif',fontWeight:'bold'}}>Designing</p>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                      <p> <span></span> Figma</p>
                      <p> <span></span> Canva</p>
                      <p> <span></span> SolidWorks</p>
                      <p> <span></span> AutoCAD</p>
                    </div>
              </div>
              </div>
            </div>
          </div>
          <div className="interest">
            <div className="edu">
              <p>INTEREST</p>
            </div>
            <div className="box">
              <div className="sslc_ss" style={{height:'70%',display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around', gap:'30px'}}>
                  <p> <span></span> Problem solving  </p>
                  <p> <span></span> Datastructure and Algorithms</p>
                  <p> <span></span> UI - Designing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='foo'>
        <Link to='/'><button>Back to home</button></Link>
        </div>
      </div>
    </div>
  )
}
