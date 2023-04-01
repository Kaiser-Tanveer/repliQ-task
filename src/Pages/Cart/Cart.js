import React, { useContext, useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
import { Table, Tbody, Th, Thead, Tr } from 'react-super-responsive-table';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleCart from './SingleCart';
import { useQuery } from '@tanstack/react-query';
import useTitle from '../../Components/MyHooks/useTitle';

const Cart = () => {
    useTitle('Cart');
    const { user } = useContext(AuthContext);


    // fetching data according to mail query 
    const { isLoading, refetch, data: bookings = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = fetch(`https://repli-q-task-server.vercel.app/myBookings?email=${user?.email}`);
            const data = (await res).json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner />
    }
    return (
        <Zoom>
            {
                bookings.length > 0 ?
                    <div className='w-11/12 py-10 mx-auto min-h-screen'>
                        <Table className="mx-auto text-center shadow-lg shadow-gray-700">
                            <Thead>
                                <Tr className="h-12 border border-gray-400 border-b-0 shadow-lg bg-gradient-to-r from-info to-secondary">
                                    <Th>Products Image</Th>
                                    <Th>Products Name</Th>
                                    <Th>Location</Th>
                                    <Th>Price</Th>
                                    <Th className="mb-4">Remove</Th>
                                    <Th className="mb-4">Payment</Th>
                                </Tr>
                            </Thead>
                            <Tbody className="text-center rounded-lg">
                                {
                                    bookings.map(booking => <SingleCart
                                        key={booking._id}
                                        booking={booking}
                                        refetch={refetch}
                                    />)
                                }
                            </Tbody>
                        </Table>
                    </div>
                    :
                    <div className='min-h-screen'>
                        <marquee behavior="default" direction="right"><h1 className='text-4xl text-sky-500 font-semibold text-center pt-10'>You have no bookings</h1></marquee>
                    </div>
            }
        </Zoom>
    );
};

export default Cart;