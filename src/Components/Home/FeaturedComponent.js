import React from 'react'
import Api from '../Api/Api.json'
import './FeaturedComponent.css'

const FeaturedComponent = () => {
    return (
        <div className='container-product'>
            {Object.keys(Api).map((product, i)=>{
                const apiItem = Api[product];
                return (
                    <div className='featured-box' key={i}>
                        <img src={apiItem.img} height={200} alt='product' />
                        <p className='left-content' style={{fontWeight: 'bold'}}>{apiItem.price}</p>
                        <p className='left-content' style={{color: 'rgba(0,47,52,.64)'}}>{apiItem.name}</p>
                        <div className='card-text'>
                            <p>Karachi</p>
                            <p>Today</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default FeaturedComponent
