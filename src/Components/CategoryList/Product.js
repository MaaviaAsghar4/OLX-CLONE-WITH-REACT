import React from 'react'
// import Api from '../Api/Api.json'
import { useParams, Link } from 'react-router-dom'
import './Product.css'
import { connect } from 'react-redux'

const Product = (props) => {
    const { id } = useParams();
    let dataApi = props[id]
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
                        {dataApi.map((product, i) => {
                            const apiItem = dataApi[i];
                            return (
                                <div className='featured-display' key={i}>
                                    <Link to={`/product/${i}`}>
                                        <img src={apiItem.img} height={200} width={200} alt='product' />
                                        <p className='align-left' style={{ fontWeight: 'bolder', color: "black" }}>Rs. {apiItem.price}</p>
                                        <p className='align-left' style={{ color: 'rgba(0,47,52,.64)' }}>{id} : {apiItem.name}</p>
                                        <div className='product-text'>
                                            <p>{apiItem.city}</p>
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

const mapStateToProps = state => ({
    Mobile_Phones: state.products.Mobile_Phones,
    Cars: state.products.Cars,
    Motorcycles: state.products.Motorcycles,
    Houses: state.products.Houses,
    TV_Video_Audio: state.products.TV_Video_Audio,
    Tablets: state.products.Tablets,
    Plots_and_Lands: state.products.Plots_and_Lands,
})

export default connect(mapStateToProps, null)(Product)
