import React from 'react';
import { useState } from 'react';
import './MobileDropdown.css';
import dropDown from './svgs/icon-arrow.svg'

const MobileDropdown = ({title,links}) => {
    const[check,setcheck] = useState(false) 
  return (
    <div className='mobileDropdown'>
        <div className='dropDown_head'>{!check && <p onClick={()=>{setcheck(true)}}>{title}</p>}{check && <p onClick={()=>{setcheck(false)}}>{title}</p>} {!check && <img onClick={()=>{setcheck(true)}} src={dropDown} alt="" />} {check && <img onClick={()=>{setcheck(false)}} className='upsideDown_arrow' src={dropDown} alt="" />}</div>
        {check && <div className="dropDown_item">{links.map((link,i)=><a href="/">{link.text}</a>)}</div>}
    </div>
  )
}

export default MobileDropdown
