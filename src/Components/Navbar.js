import React from 'react';
import Logo from '../images/OLX-Logo.png';
import './Navbar.css'
import { Link } from 'react-router-dom'
// import Image from '../images/images.png'
import { auth_data, sign_out } from '../Store/action'
import { connect } from 'react-redux';
// import { useState } from 'react';

const Navbar = (props) => {
    let user = props.user;
    let isLogged = false
    // let [isLogged, setLogged] = useState(false)
    // if(user) {
    //     setLogged(true)
    // }

    if(user.displayName) {
        isLogged = true
    }

    let login = () => {
        alert("Please Login to Create Ad")
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <Link to='/'><img src={Logo} alt='OLX logo' /></Link>
            </div>
            <div className='nav-filter'>
                <input type='text' placeholder='Pakistan' />
            </div>
            <div className='nav-search'>
                <input type='text' placeholder='Find Cars, Mobile Phones, and More' />
            </div>
            <div className='login'>
                {(isLogged) ? <button onClick={() => props.sign_out()}>Sign Out</button> : <button onClick={() => props.auth_data()}>Login</button>}
                {(isLogged) ? <img src={isLogged? user.photoURL:null} style={{ borderRadius: '50%' }} height={40} width={40} alt='' /> : null}
            </div>
            <div className='sell'>
                {isLogged?<Link to='/ad/post'>SELL</Link>:<button className='disabled' onClick={login}>SELL</button>}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    auth_data: () => dispatch(auth_data()),
    sign_out: () => dispatch(sign_out())
})

const mapStateToProps = state => ({
    user: state.authentication.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
