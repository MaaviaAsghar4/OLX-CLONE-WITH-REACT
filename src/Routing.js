import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import CategoryList from './Components/CategoryList/CategoryList'
import ProductItem from './Components/Product/ProductItem';
import MainAd from './Components/AdCreator/MainAd';
import Chat from './Components/Chat/Chat';

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/ad/post' element={<MainAd />} />
                <Route path='/user/:id' element={<Chat />} />
                <Route path='/:id' element={<CategoryList />} />
                <Route path='/product/:id' element={<ProductItem />} />
            </Routes>
        </div>
    )
}

export default Routing
