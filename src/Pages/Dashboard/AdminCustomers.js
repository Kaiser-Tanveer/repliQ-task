import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { FaTrashAlt } from 'react-icons/fa';

const AdminCustomers = () => {
    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = fetch("http://localhost:5000/dashboard/users");
            const data = (await res).json();
            return data;
        }
    });

    // Remove Customers 
    const removeHandler = id => {
        console.log(id);
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <Table className="mx-auto text-center">
                <Thead>
                    <Tr className="h-12 border border-gray-400 border-b-0 shadow-lg bg-gradient-to-r from-info to-secondary">
                        <Th>User Profile</Th>
                        <Th>User Name</Th>
                        <Th>Email</Th>
                        <Th>Phone</Th>
                        <Th className="mb-4">Remove</Th>
                    </Tr>
                </Thead>
                {
                    users.map(user => <Tbody
                        key={user?._id}
                        className="mx-auto text-center">
                        <Td><img src={user?.photoURL} alt="userProfile" className='w-16 h-16 flex mx-auto' /></Td>
                        <Td><p>{user?.displayName}</p></Td>
                        <Td><p>{user?.email}</p></Td>
                        <Td>{user?.phoneNumber}</Td>
                        <Td><FaTrashAlt
                            onClick={() => removeHandler(user?._id)}
                            className='flex mx-auto' /></Td>
                    </Tbody>)
                }
            </Table>
        </div>
    );
};

export default AdminCustomers;