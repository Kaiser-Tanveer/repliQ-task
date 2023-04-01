import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table';
import { FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import useTitle from '../../Components/MyHooks/useTitle';

const AdminCustomers = () => {
    useTitle('All Users');
    const { isLoading, refetch, data: users = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = fetch("https://repli-q-task-server.vercel.app/dashboard/users");
            const data = (await res).json();
            return data;
        }
    });

    // Remove Handler 
    const removeHandler = id => {
        const proceed = window.confirm('Sure to delete this User!!!');
        if (proceed) {
            fetch(`https://repli-q-task-server.vercel.app/dashboard/users?id=${id}`, {
                method: 'DELETE'
            })
                .then(data => {
                    console.log(data);
                    if (data.status === 200) {
                        toast.success('Deleted Successfully!!!');
                        refetch();
                    }
                })
                .catch(err => {
                    toast.error(err.message);
                });
        }
    }

    if (isLoading) {
        return <Spinner />
    }
    return (
        <>
            {
                users.length > 0 ?
                    <div className='w-[90%] mx-auto'>
                        <h1 className='text-4xl text-center text-sky-500 font-bold py-6'>All <span className='text-pink-500'>Customers</span> of Your Website</h1>
                        <Table className="mx-auto text-center text-gray-900 bg-gray-100 shadow-lg shadow-gray-700 rounded-lg">
                            <Thead>
                                <Tr className="h-12 border border-gray-400 border-b-0 shadow-lg bg-gradient-to-r from-sky-400 to-pink-400">
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
                                    className="items-center py-6">
                                    <Tr>
                                        <Td><img src={user?.photoURL} alt="userProfile" className='w-16 h-16 flex mx-auto' /></Td>
                                        <Td><p className='text-center'>{user?.displayName}</p></Td>
                                        <Td><p className='text-center'>{user?.email}</p></Td>
                                        <Td><p className='text-center'>{user?.phoneNumber}</p></Td>
                                        <Td><FaTrashAlt
                                            onClick={() => removeHandler(user?._id)}
                                            className='flex mx-auto text-3xl p-1 text-pink-500 border-2 border-pink-500 hover:bg-pink-500 hover:text-gray-700 hover:border-gray-700 rounded-md mb-6 hover:scale-125 mt-4 duration-500' /></Td>
                                    </Tr>
                                </Tbody>)
                            }
                        </Table>
                    </div>
                    :
                    <div className='min-h-screen'>
                        <marquee behavior="default" direction="right"><h1 className='text-4xl text-sky-500 font-semibold text-center pt-10'>No users found</h1></marquee>
                    </div>
            }
        </>
    );
};

export default AdminCustomers;