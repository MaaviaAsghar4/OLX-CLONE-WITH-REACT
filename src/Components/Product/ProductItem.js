import React from 'react'
import { useParams } from 'react-router-dom'

const ProductItem = () => {
    const { product } = useParams()
    console.log(product)
    return (
        <div>
            {product}
        </div>
    )
}

export default ProductItem
