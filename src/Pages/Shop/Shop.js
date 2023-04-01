import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import { FaInfo } from 'react-icons/fa';
import useTitle from '../../Components/MyHooks/useTitle';

const Shop = () => {
    useTitle('Shop');
    const navigation = useNavigation();
    const products = useLoaderData([]);

    if (navigation.state === "loading") {
        return <Spinner />
    }
    return (
        <div className='container mx-auto grid md:grid-cols-2 gap-y-10 relative py-20 items-center'>
            {
                products.map(product =>
                    <div
                        key={product._id}
                        className="card w-5/6 lg:w-96 mx-auto bg-base-100 shadow-lg border border-info group hover:scale-110 duration-500 shadow-gray-700">
                        <figure><img src={product.img} alt="productImg" className='p-2  w-full h-72 group-hover:scale-125 duration-500' /></figure>
                        <div className="card-body bg-gradient-to-r from-sky-400 to-pink-400 rounded-b-lg">
                            <h2 className="card-title">{product.name}</h2>
                            <p className='text-xl text-secondary-focus'>Price: Rs.{product.price}</p>
                            <div className="card-actions justify-center">
                                <Link
                                    to={`/product/${product._id}`}
                                    className="flex items-center bg-gradient-to-r from-pink-400 to-sky-400 shadow-inner hover:shadow-lg hover:shadow-gray-700 shadow-gray-700 border border-gray-600 hover:border-gray-100 p-2 rounded-md font-semibold hover:scale-110 hover:text-gray-100 duration-500"><FaInfo /> DETAILS</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Shop;