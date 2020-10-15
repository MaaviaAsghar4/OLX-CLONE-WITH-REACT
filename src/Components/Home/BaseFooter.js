import React from 'react'
import Android from '../../images/playstore_2x.webp'
import Iphone from '../../images/appstore_2x.webp'
import './BaseFooter.css'

const BaseFooter = () => {
    return (
        <div className='ft-base'>
            <div className='ft-list'>
                <div>
                    <h4>POPULAR CATEGORIES</h4>
                    <li>Cars</li>
                    <li>Flats for Rents</li>
                    <li>Jobs</li>
                    <li>Mobile Phones</li>
                </div>
                <div>
                    <h4>TRENDING SEARCHES</h4>
                    <li>Bikes</li>
                    <li>Watches</li>
                    <li>Books</li>
                    <li>Dogs</li>
                </div>
                <div>
                    <h4>ABOUT US</h4>
                    <li>About OLX Group</li>
                    <li>OLX Blog</li>
                    <li>Contact Us</li>
                    <li>OLX for Businesses</li>
                </div>
                <div>
                    <h4>OLX</h4>
                    <li>Help</li>
                    <li>Sitemap</li>
                    <li>Legal and Privacy Information</li>
                </div>
                <div>
                    <h4>FOLLOW US</h4>
                    <img src={Iphone} alt='' />
                    <img src={Android} alt='' />
                </div>
            </div>
            <div className='ft-foot'>
                <p><strong>Other Countries</strong>
                    <span>India</span>
                    <span>-</span>
                    <span>South Africa</span>
                    <span>-</span>
                    <span>Indonesia</span>
                </p>
                <p>
                    <strong>Free Classifieds in Pakistan</strong>
                    <span>. © 2006-2020 OLX</span>
                </p>
            </div>
        </div>
    )
}

export default BaseFooter
