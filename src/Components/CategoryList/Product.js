import React from 'react'
import Api from '../Api/Api.json'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    return (
        <div className='product'>
            <div>
                <div>
                    <p>221,723 ads in <strong>Pakistan</strong></p>
                </div>
                <div>
                    <span><strong>VIEW</strong></span>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span><strong>SORT BY :</strong></span>
                    <span><strong>Newly</strong></span>
                </div>
                <div>
                    <div className='container-product'>
                        {Object.keys(Api).map((product, i) => {
                            const apiItem = Api[product];
                            return ( <div className='featured-box' key={i}>
                                    <img src={apiItem.img} height={200} alt='product' />
                                    <p className='left-content' style={{ fontWeight: 'bold' }}>{apiItem.price}</p>
                                    <p className='left-content' style={{ color: 'rgba(0,47,52,.64)' }}>{id} : {apiItem.name}</p>
                                    <div className='card-text'>
                                        <p>Karachi</p>
                                        <p>Today</p>
                                    </div>
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
