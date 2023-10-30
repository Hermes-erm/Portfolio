import React from "react";
import {Link} from 'react-router-dom'
import './Comp.css'

export default function Comp(props){
    return(
        <div className='comp_head'>
            <div className="comp_left">
                <div className="top">
                    <div style={{display:'flex',height:'55%'}}>
                        <span style={{padding:'5px'}}></span>
                        <div className='write'>
                            <p>{props.heading}</p>
                            <p><Link to={props.link} style={{color:'black'}} target='_blank'>{props.desc}</Link></p>
                        </div>
                    </div>
                </div>
                <div className="bot">
                    <div className="p_box">
                        <p>{props.des}</p>
                    </div>
                </div>
            </div>
            <div className="comp_right">
                <img src = {props.picture} alt="E-com" />
            </div>
        </div>
    )
}