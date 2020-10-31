import React from 'react'
// import Api from '../Api/Api.json'
import './SliderImage.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 

const SliderImage = (props) => {
    let dataApi = props.data
    return (
        <div className='top'>
            <span>Based on your latest search</span>
            <div className='container_product'>
                {dataApi.map((product, i) => {
                    const apiItem = dataApi[i];
                    return (
                        <div className='featured_box' key={i}>
                            <Link to={`/product/${i}`}>
                                <img src={apiItem.img} height={200} width={200} alt='product' />
                                <p className='left_content' style={{ fontWeight: 'bold', color: 'black' }}>{apiItem.price}</p>
                                <p className='left_content' style={{ color: 'rgba(0,47,52,.64)' }}>{apiItem.name}</p>
                                <div className='card_text'>
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

export default connect(mapStateToProps, null)(SliderImage)
