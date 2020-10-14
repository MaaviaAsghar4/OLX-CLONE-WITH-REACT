import React from 'react'
import BaseFooter from './BaseFooter'
import FeaturedComponent from './FeaturedComponent'
import Footer from './Footer'
import Slider from './Slider'
import SliderImage from './SliderImage'

const Home = () => {
    return (
        <div>
            <Slider />
            <SliderImage />
            <FeaturedComponent />
            <Footer />
            <BaseFooter />
        </div>
    )
}

export default Home
