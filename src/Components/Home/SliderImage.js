import React from 'react'
import Api from '../Api/Api.json'
import './SliderImage.css'

const SliderImage = () => {
    return (
        <div className='top'>
            <span>Based on your latest search</span>
        <div className='container_product'>
            {Object.keys(Api).map((product, i)=>{
                const apiItem = Api[product];
                return (
                    <div className='featured_box' key={i}>
                        <img src={apiItem.img} height={150} alt='product' />
                        <p className='left_content' style={{fontWeight: 'bold'}}>{apiItem.price}</p>
                        <p className='left_content' style={{color: 'rgba(0,47,52,.64)'}}>{apiItem.name}</p>
                        <div className='card_text'>
                            <p>Karachi</p>
                            <p>Today</p>
                        </div>
                    </div>
                )
            })}
            
        </div>
        </div>
    )
}

export default SliderImage
