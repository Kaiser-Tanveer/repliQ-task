import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { Td, Tr } from 'react-super-responsive-table';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const SingleCart = ({ booking, refetch }) => {
    const { user } = useContext(AuthContext);
    const { img, productName, price, email, location, _id } = booking;

    const removeHandler = id => {
        const proceed = window.confirm('Sure to delete this item!!!');
        if (proceed) {
            fetch(`https://repli-q-task-server.vercel.app/bookings?id=${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Product Deleted Successfully!!');
                        refetch();
                    }
                })
        }
    }
    return (
        <>
            {
                (user.email === email) ?
                    <Tr
                        className="border border-gray-400 bg-gray-50 border-x-0"
                    >
                        <Td><img src={img} alt="product-img" className='w-16 h-20 flex mx-auto rounded-md hover:scale-150 duration-500 shadow-md' /></Td>
                        <Td><p className='font-semibold text-info text-center'>{productName}</p></Td>
                        <Td><p className='text-center'>{location}</p></Td>
                        <Td><p className='font-semibold text-info text-center'>Rs. {price}</p></Td>
                        <Td><FaTrashAlt
                            onClick={() => removeHandler(_id)}
                            className='flex mx-auto mb-4 text-4xl text-pink-500 hover:text-gray-700 hover:bg-pink-500 p-2 rounded-md hover:scale-125 duration-500 border border-pink-500 hover:border-gray-700 hover:shadow-lg my-2' /></Td>
                        <Td><p className="text-sky-500 font-semibold text-center">PAY</p></Td>
                    </Tr>
                    :
                    <h2 className='text-5xl text-info text-center'>Please, Add An Order</h2>
            }
        </>
    );
};

export default SingleCart;