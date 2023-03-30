import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner/Spinner';

const ProductMenu = () => {
    const navigation = useNavigation();
    const products = useLoaderData();
    console.log(products);

    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-center font-bold text-4xl pb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500'>Browse Categories</h2>
            <div className='grid grid-cols-4 gap-6 pb-4 drop-shadow-lg'>
                {
                    products.map(product =>
                        <Link
                            key={product._id}
                            to={`allProducts/${product.category_name}`}
                            className='lg:flex shadow-lg hover:scale-110 bg-gradient-to-r from-sky-400 to-pink-400 justify-center md:justify-between items-center w-full px-6 rounded-md lg:h-24 duration-500'
                        >
                            <div>
                                <img src={product.img} alt="" className='w-full h-14 md:p-0 md:h-24' />
                            </div>
                            <div>
                                <h2 className='text-xl text-center hidden md:block font-semibold'>{product.category_name}</h2>
                            </div>
                        </Link>
                    )
                }
            </div >
        </div>
    );
};

export default ProductMenu;