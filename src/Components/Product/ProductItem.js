import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import UserInfo from './UserInfo'
import './ProductItem.css'

const ProductItem = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <div className='breadcrumb'>
                <span>{<Link to='/'>Home</Link>}/</span>
                <span><Link to={{ id }}>{id}</Link></span>
            </div>
            <div className='product-info'>
                <ProductDetail />
                <UserInfo />
            </div>
        </div>
    )
}

export default ProductItem
