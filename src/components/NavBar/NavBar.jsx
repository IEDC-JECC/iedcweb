import React from 'react';
import Logo from '../../images/iedc.png';
import {Link} from 'react-router-dom';
import "./navbar.css";

function NavBar() {
  return (
    <div>
        <div className="navhead">
            <img src={Logo} alt='logoo'></img>
            <div className="vazhi">
                <Link className='linkey' to='/about'>About </Link>
                <Link className='linkey' to='/execom'>Execom </Link>
                <Link className='linkey' to='/gov'>Governance </Link>
                <Link className='linkey' to='/news'>News </Link>
                <Link className='linkey' to='/events'>Events </Link>
                <Link className='linkey' to='/achv'>Achievments </Link>
            </div>
            <Link to='/about'><button>Login</button></Link>
        </div>
    </div>
  )
}

export default NavBar