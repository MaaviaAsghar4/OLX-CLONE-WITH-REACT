import React from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import UserInfo from './UserInfo'
import './ProductItem.css'
import { connect } from 'react-redux'


const ProductItem = (props) => {
    const dataApi = props.data
    const { id } = useParams()
    const ApiItem = dataApi[id];

    return (
        <div>
            <div className='breadcrumb'>
                <span>{<Link to='/'>Home</Link>}/</span>
                <span><Link to={{ id }}>{ApiItem.name}</Link></span>
            </div>
            <div className='product-info'>
                <ProductDetail />
                <UserInfo />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.products.data
})

export default connect(mapStateToProps,null)(ProductItem)
