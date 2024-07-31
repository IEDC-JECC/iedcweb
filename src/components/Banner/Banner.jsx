import React from 'react';
import "./banner.css";

function Banner() {
  return (
    <div>
        <div className="iebann">
            <div style={{display:"flex",gap:"10px"}}><p className='neel'>Empowering </p><p className='lneel'> Innovators</p></div>
            <div style={{display:"flex",gap:"10px"}}><p className='neel'>Shaping </p><p className='manj'> Enterpreneurs</p></div>
            <p className="myStyle">This is IEDC JECC</p>
        </div>
    </div>
  )
}

export default Banner