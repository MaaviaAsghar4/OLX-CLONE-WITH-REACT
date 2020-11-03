import React from 'react'
import './ProductDetail.css'
// import Product from '../Api/Api.json'
import { useParams } from 'react-router-dom' 
import { connect } from 'react-redux'

const ProductDetail = (props) => {
    const dataApi = props.data
    const { id } = useParams();
    const ApiItem = dataApi[id];


    return (
        <div className='detail-sidebar'>
            <div>
                <div className='product-img'>
                    <img src={ApiItem.img} alt={ApiItem.name} />
                </div>
                <div className='product-list'>
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} width={150} />
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} width={150} />
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} width={150} />
                    <img src={ApiItem.img} alt={ApiItem.name} height={150} width={150} />
                </div>
            </div>
            <div>
                <div className='product-detail'>
                    <h3>Details</h3>
                    <div className='product-flex'>
                        <p className='shade-color'>Brand</p>
                        <p>{ApiItem.brand}</p>
                        <p className='shade-color'>Tag</p>
                        <p>{ApiItem.tag}</p>
                        <p className='shade-color'>Condition</p>
                        <p>{ApiItem.condition}</p>
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
                    <img src={ApiItem.img} alt={ApiItem.name} height={250} width={250} />
                    <p>{ApiItem.price}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.products.data
})

export default connect(mapStateToProps, null)(ProductDetail) 