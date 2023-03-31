import React from 'react';
import BannerSlider from './BannerSlider';
import ProductMenu from './ProductMenu';

const Home = () => {
    return (
        <div className='pb-20'>
            <BannerSlider />
            <ProductMenu />
        </div>
    );
};

export default Home;