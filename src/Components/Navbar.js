import React from 'react';
import Logo from '../images/OLX-Logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={Logo} alt='OLX logo' />
            </div>
            <div className='nav-filter'>
                <input type='text' />
            </div>
            <div className='nav-search'>
                <input type='text' />
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
