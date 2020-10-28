import React from 'react'
import './UserInfo.css'
// import Product from '../Api/Api.json'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const UserInfo = (props) => {
    const dataApi = props.data
    const { id } = useParams();
    const ApiItem = dataApi[id];
    return (
        <div className='user-detail'>
            <div className='user-price'>
                <h3>Rs {ApiItem.price}</h3>
            </div>
            <div className='user-description'>
                <p>Seller Description</p>
                <p>Description</p>
                <button>Chat With Seller</button>
            </div>
            <div className='user-location'>
                <h4>Posted in</h4>
                <p>Karachi Sindh Pakistan</p>
            </div>
            <div className='user-id'>
                AD ID 123456789
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    data: state.products.data
})

export default connect(mapStateToProps, null)(UserInfo)
