import React from 'react';
import "./footer.css";
import ededc from '../../images/iedc.png';

function Footer() {
  return (
    <div>
        <div className="foots">
            <h2>Join the IEDC<br></br>
            for top-notch opportunities.</h2>
            <div className="footi">
                <div className="logdet">
                    <img src={ededc}></img>
                    <p>Discover endless possibilities with IEDC - your<br></br> gateway to innovation and growth.</p>
                </div>
                <div className="linkdet">
                    <a href="http://www.google.com">Execom</a>
                    <a href="http://www.google.com">Execom</a>
                </div>
                <div className="linkdet">
                    <a href="http://www.google.com">Execom</a>
                    <a href="http://www.google.com">Execom</a>
                </div>
            </div>
            <p className='ajs'>IEDC 2024 - Developed By Alan Jose Santo</p>
        </div>
        
    </div>
  )
}

export default Footer