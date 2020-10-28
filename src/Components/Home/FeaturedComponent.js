import React from 'react'
// import Api from '../Api/Api.json'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { alter_data } from '../../Store/action'

import './FeaturedComponent.css'

const FeaturedComponent = (props) => {
    // console.log(props.data)
    // console.log(Object.keys(props.data))
    // console.log(alter_data())
    let dataApi = props.data
    return (
        <div className='top'>
            <span>FRESH REOMMENDATIONS</span>
            <div className='container-product'>
                {Object.keys(dataApi).map((product, i) => {
                    const apiItem = dataApi[product];
                    return (
                        <div className='featured-box' key={i}>
                            <Link to={`/product/${product}`}>
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


const mapStateToProps = state => ({
    data: state.products.data
})

const mapDispatchToProps = dispatch => ({
    set_data: () => dispatch(alter_data)
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedComponent)
