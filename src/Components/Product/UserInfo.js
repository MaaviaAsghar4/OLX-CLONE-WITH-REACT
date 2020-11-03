import React from 'react'
import './UserInfo.css'
// import Product from '../Api/Api.json' 
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const UserInfo = (props) => {
    const dataApi = props.data
    const { id } = useParams();
    const ApiItem = dataApi[id];
    let user = props.user;
    let isLogged = false
    if(user.displayName) {
        isLogged = true
    }

    let login = () => {
        alert("Please Login to Create Ad")
    }

    return (
        <div className='user-detail'>
            <div className='user-price'>
                <h3>Rs {ApiItem.price}</h3>
            </div>
            <div className='user-description'>
                <p>Seller Description</p>
                <p className='user-flex'><img className='user-photo' src={ApiItem.photo} alt='' /> {ApiItem.user}</p>
                {isLogged? <Link className='user-chat' to={`/user/${id}`}><button>Chat With Seller</button></Link>:<button onClick={login}>Chat With Seller</button>}
                <p>Number: {ApiItem.number}</p>
            </div>
            <div className='user-location'>
                <h4>Posted in</h4>
                <p>{ApiItem.city}</p>
            </div>
            <div className='user-id'>
                AD ID 123456789
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    data: state.products.data
})

export default connect(mapStateToProps, null)(UserInfo)
