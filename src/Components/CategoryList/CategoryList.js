import React from 'react'
// import { useParams } from 'react-router-dom'
import Categoryhead from './Categoryhead';
import Filter from './Filter';
import Product from './Product';

const CategoryList = () => {
    // const { id } = useParams();
    return (
        <div> 
            <Categoryhead />
            <Filter />
            <Product />
        </div>
    )
}

export default CategoryList
