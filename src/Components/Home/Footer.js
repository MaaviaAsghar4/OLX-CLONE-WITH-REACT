import React from 'react'
import './Footer.css'
import Phone from '../../images/phone-app.webp'
import Android from '../../images/playstore_2x.webp'
import Iphone from '../../images/appstore_2x.webp'

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <img src={Phone} alt='' />
            </div>
            <div className='content'>
                <h1>TRY THE OLX APP</h1>
                <p>Buy, sell and find just about anything using the app on your mobile.</p>
            </div>
            <div className='action'>
                <h3>GET YOUR APP TODAY</h3>
                <img className='iphone' src={Iphone} alt='' />
                <img className='android' src={Android} alt='' />
            </div>
        </div>
    )
}

export default Footer
