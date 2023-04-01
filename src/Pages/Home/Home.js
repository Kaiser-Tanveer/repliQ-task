import React from 'react';
import BannerSlider from './BannerSlider';
import ProductMenu from './ProductMenu';
import useTitle from '../../Components/MyHooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div className='pb-20'>
            <BannerSlider />
            <ProductMenu />
        </div>
    );
};

export default Home;