import React from 'react'
import FeaturedComponent from './FeaturedComponent'
import Slider from './Slider'
import SliderImage from './SliderImage'

const Home = () => {
    return (
        <div>
            <Slider />
            <SliderImage />
            <FeaturedComponent />
        </div>
    )
}

export default Home
