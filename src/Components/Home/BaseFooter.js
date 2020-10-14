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
                    <h4>POPULAR CATEGORIES</h4>
                    <li>Cars</li>
                    <li>Flats for Rents</li>
                    <li>Jobs</li>
                    <li>Mobile Phones</li>
                </div>
                <div>
                    <h4>POPULAR CATEGORIES</h4>
                    <li>Cars</li>
                    <li>Flats for Rents</li>
                    <li>Jobs</li>
                    <li>Mobile Phones</li>
                </div>
                <div>
                    <h4>POPULAR CATEGORIES</h4>
                    <li>Cars</li>
                    <li>Flats for Rents</li>
                    <li>Jobs</li>
                    <li>Mobile Phones</li>
                </div>
                <div>
                    <h4>FOLLOW US</h4>
                    <img src={Iphone} alt='' />
                    <img src={Android} alt='' />
                </div>
            </div>
            <div className='ft-foot'>
                <p>Other Countries
                    <span>India</span>
                    <span>-</span>
                    <span>South Africa</span>
                    <span>-</span>
                    <span>Indonesia</span>
                </p>
                <p>
                    Free Classifieds in Pakistan
                    <span>. © 2006-2020 OLX</span>
                </p>
            </div>
        </div>
    )
}

export default BaseFooter
