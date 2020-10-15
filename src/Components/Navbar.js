import React from 'react';
import Logo from '../images/OLX-Logo.png';
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'><img src={Logo} alt='OLX logo' /></Link>
            </div>
            <div className='nav-filter'>
                <input type='text' placeholder='Pakistan'/>
            </div>
            <div className='nav-search'>
                <input type='text' placeholder='Find Cars, Mobile Phones, and More' />
            </div>
            <div className='login'>
                <button>Login</button>
            </div>
            <div className='sell'>
                <button>SELL</button>
            </div>
        </div>
    )
}

export default Navbar
