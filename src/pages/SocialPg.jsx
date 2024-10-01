// SocialPg.jsx
import React from 'react'
import Logo from '../images/iedc.png';
import "./socialpg.css";
import {Link} from 'react-router-dom';
import SocialPage from '../components/SocialPage/SocialPage';

function SocialPg() {
  return (
    <div className='full'>
      <header className="navhead">
        <img src={Logo} alt='IEDC Logo' className="logo" />
        <div className="vazhi">
        <Link className='linkey' to='/'>Innovation and Entrepreneurship Development Cell Jyothi Engineering College </Link>
        </div>
      </header>
      
      <div className="iebann">
      </div>
        <div className="banner-content">
          <div className="txtmh">
            <div className="banner-line"><p className='neel'>Empowering </p><p className='lneel'>Innovators</p></div>
            <div className="banner-line"><p className='neel'>Shaping </p><p className='manj'>Entrepreneurs</p></div>
          </div>
          <p className="myStyle">This is IEDC JECC</p>
        
      </div>
      
      <SocialPage />
    </div>
  )
}

export default SocialPg;

// socialpg.css
