import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { Td, Tr } from 'react-super-responsive-table';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';

const SingleCart = ({ booking, refetch }) => {
    const { user } = useContext(AuthContext);
    const { img, productName, price, email, _id } = booking;

    const removeHandler = id => {
        const proceed = window.confirm('Sure to delete this item!!!');
        if (proceed) {
            fetch(`http://localhost:5000/bookings?id=${id}`, {
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
                        <Td><img src={img} alt="product-img" className='w-16 flex mx-auto shadow-md' /></Td>
                        <Td className="font-semibold text-info">{productName}</Td>
                        <Td>{email}</Td>
                        <Td className="font-semibold text-info">Rs. {price}</Td>
                        <Td><FaTrashAlt
                            onClick={() => removeHandler(_id)}
                            className='flex mx-auto mb-4 text-4xl text-pink-500 hover:text-gray-700 hover:bg-pink-500 p-2 rounded-md hover:scale-125 duration-500 border border-pink-500 hover:border-gray-700 hover:shadow-lg my-2' /></Td>
                        <Td><span className="text-pink-500 font-semibold">PAY</span></Td>
                    </Tr>
                    :
                    <h2 className='text-5xl text-info text-center'>Please, Add An Order</h2>
            }
        </>
    );
};

export default SingleCart;