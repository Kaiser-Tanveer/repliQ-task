import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import { FaRegTrashAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const AdminOrders = () => {
    const { isLoading, refetch, data: orders = [] } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = fetch("http://localhost:5000/dashboard/orders");
            const data = (await res).json();
            return data;
        }
    });

    // Remove Handler 
    const removeHandler = id => {
        const proceed = window.confirm('Sure to delete this card!!!');
        if (proceed) {
            fetch(`http://localhost:5000/dashboard/orders?id=${id}`, {
                method: 'DELETE'
            })
                .then(data => {
                    if (data.status === 200) {
                        toast.success('Deleted Successfully!!!');
                        refetch();
                    }
                })
                .catch(err => {
                    toast.error(err.message)
                });
        }
    };

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='w-5/6 mx-auto mt-20'>
            {
                orders?.map(order => <div
                    className='w-full md:flex mb-10 bg-pink-500 bg-opacity-80 shadow-lg shadow-gray-700 rounded-lg relative'
                    key={order?._id}
                >
                    <FaRegTrashAlt
                        onClick={() => removeHandler(order?._id)}
                        className='absolute right-0 bottom-0 p-2 text-pink-500 text-5xl bg-gray-100 rounded-lg shadow-inner shadow-gray-900 hover:shadow-lg hover:shadow-gray-700 hover:scale-125 duration-500' />
                    <div className='md:w-[40%] bg-gray-100 md:rounded-l-lg shadow-inner shadow-gray-900'>
                        <p className='text-xl font-semibold text-center py-2 border-b-2 bg-sky-500'>Product Info</p>
                        <img src={order?.img} alt="productImg" className='h-52 rounded-lg mx-auto' />
                        <div className='border-t-2 text-center pb-2'>
                            <h4>{order?.productName}</h4>
                            <h4 className='font-semibold text-pink-500'>Price: {order?.price} INR</h4>
                        </div>
                    </div>
                    <div className='w-full'>
                        <p className='text-xl font-semibold text-center py-2 border-b-2 bg-sky-500'>Customer Info</p>
                        <div className='w-[60%] mx-auto flex items-center justify-start mt-4'>
                            <img src={order?.photoURL} alt="customerImg" className='h-14 w-14 rounded-full border-2 bg-gray-100 border-sky-500 p-1 shadow-inner shadow-gray-900 hover:scale-125 duration-500' />
                            <h4 className='text-xl font-semibold ml-4'>{order?.name}</h4>
                        </div>
                        <div className='w-[90%] md:w-[60%] mx-auto mt-2 pt-2 border-t border-sky-500'>
                            <p><span className='font-bold'>Email</span>: {order?.email}</p>
                            <p><span className='font-bold'>Message</span>: {order?.msg}</p>
                        </div>
                        <div className='w-[60%] mx-auto pb-4 md:pb-0'>
                            <hr className='mt-4 w-[90%] mx-auto md:mr-auto border border-sky-500' />
                            <hr className='mt-4 w-[70%] mx-auto md:mr-auto border border-sky-500' />
                            <hr className='mt-4 w-[50%] mx-auto md:mr-auto border border-sky-500' />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AdminOrders;