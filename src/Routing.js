import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import CategoryList from './Components/CategoryList/CategoryList'
import ProductItem from './Components/Product/ProductItem';
import MainAd from './Components/AdCreator/MainAd';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ad/post' element={<MainAd />} />
                <Route path='/:id' element={<CategoryList />} />
                <Route path='/product/:id' element={<ProductItem />} />
                {/* <Route path='/' element={<Cars />} />
                <Route path='/' element={<MotorCycles />} />
                <Route path='/' element={<Houses />} />
                <Route path='/' element={<TV-Video-Audio />} />
                <Route path='/' element={<Tablets />} />
                <Route path='/' element={<LandPlots />} /> */}
            </Routes>
        </div>
    )
}

export default Routing
