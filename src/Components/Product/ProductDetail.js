import React from 'react'
import './ProductDetail.css'
import Product from '../Api/Api.json'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams();
    const ApiItem = Product[id];


    return (
        <div className='detail-sidebar'>
            <div>
                <div className='product-img'>
                    <img src={ApiItem.img} alt={ApiItem.name} />
                </div> 
                <div className='product-list'>
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} />
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} />
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} />
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} />
                </div>
            </div>
            <div>
                <div className='product-detail'>
                    <h3>Details</h3>
                    <div className='product-flex'>
                        <p className='shade-color'>Area Unit</p>
                        <p >Square Feet</p>
                        <p className='shade-color'>Area</p>
                        <p>1121</p>
                        <p className='shade-color'>Area</p>
                        <p>1121</p>
                    </div>
                    <hr />
                    <h3>Description</h3>
                    <p className='description'>
                        {ApiItem.description}
                    </p>
                </div>
            </div>
            <div className='product-ad'>
                <h3>Related Ads</h3>
                <div className='ad-detail'>
                    <img src={ApiItem.img} alt={ApiItem.name} height={250} />
                    <p>{ApiItem.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail 