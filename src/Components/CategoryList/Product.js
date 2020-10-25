import React from 'react'
import Api from '../Api/Api.json'
import { useParams, Link } from 'react-router-dom'
import './Product.css'

const Product = () => {
    const { id } = useParams();
    return (
        <div className='product-sidebar'>
            <div>
                <div className='product-header'>
                    <div className='product-adbar'>
                        <p>221,723 ads in <strong>Pakistan</strong></p>
                    </div>
                    <div className='ad-description'>
                        <span><strong>VIEW</strong></span>
                        <span>123</span>
                        <span><strong>SORT BY :</strong></span>
                        <span><strong>Newly</strong></span>
                    </div>
                </div>
                <div>
                    <div className='product-display'>
                        {Object.keys(Api).map((product, i) => {
                            const apiItem = Api[product];
                            return (
                                <div className='featured-display' key={i}>
                                    <Link to={`/product/${product}`}>
                                        <img src={apiItem.img} height={200} alt='product' />
                                        <p className='align-left' style={{ fontWeight: 'bolder', color: "black"}}>Rs. {apiItem.price}</p>
                                        <p className='align-left' style={{ color: 'rgba(0,47,52,.64)' }}>{id} : {apiItem.name}</p>
                                        <div className='product-text'>
                                            <p>Karachi</p>
                                            <p>Today</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
