import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import CategoryList from './Components/CategoryList/CategoryList'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<CategoryList />} />
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
