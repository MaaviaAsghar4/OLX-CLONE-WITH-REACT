import React from 'react'
import Api from '../Api/Api.json'
import { Link } from 'react-router-dom'

import './FeaturedComponent.css'

const FeaturedComponent = () => {
    return (
        <div className='top'>
            <span>FRESH REOMMENDATIONS</span>
            <div className='container-product'>
                {Object.keys(Api).map((product, i) => {
                    const apiItem = Api[product];
                    return (
                        <div className='featured-box' key={i}>
                            <Link to={`/product/${apiItem.name}`}>
                                <img src={apiItem.img} height={200} alt='product' />
                                <p className='left-content' style={{ fontWeight: 'bold', color: 'black' }}>Rs. {apiItem.price}</p>
                                <p className='left-content'>{apiItem.name}</p>
                                <div className='card-text'>
                                    <p>Karachi</p>
                                    <p>Today</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default FeaturedComponent
