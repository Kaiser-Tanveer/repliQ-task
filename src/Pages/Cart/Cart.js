import React, { useContext, useEffect, useState } from 'react';
import { Zoom } from 'react-reveal';
import { Table, Tbody, Th, Thead, Tr } from 'react-super-responsive-table';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleCart from './SingleCart';
import { useQuery } from '@tanstack/react-query';

const Cart = () => {
    const { user } = useContext(AuthContext);


    // fetching data according to mail query 
    const { isLoading, refetch, data: bookings = [] } = useQuery({
        queryKey: ["bookings"],
        queryFn: async () => {
            const res = fetch(`http://localhost:5000/myBookings?email=${user?.email}`);
            const data = (await res).json();
            return data;
        }
    })

    if (isLoading) {
        return <Spinner />
    }
    return (
        <Zoom>
            <div className='w-5/6 py-20 mx-auto min-h-screen'>
                <Table className="mx-auto text-center shadow-lg shadow-gray-700">
                    <Thead>
                        <Tr className="h-12 border border-gray-400 border-b-0 shadow-lg bg-gradient-to-r from-info to-secondary">
                            <Th>Products Image</Th>
                            <Th>Products Name</Th>
                            <Th>Email</Th>
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
        </Zoom>
    );
};

export default Cart;