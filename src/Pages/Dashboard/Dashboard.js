import React from 'react';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile relative">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet />
                <label htmlFor="my-drawer-2" className="fixed left-[2%] text-sky-500 bg-pink-500 bg-opacity-50 p-2 rounded-lg border-2 border-opacity-50 border-sky-500 lg:hidden"><HiOutlineArrowsExpand className='text-2xl' /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">Admin Customers</Link></li>
                    <li><Link to="/dashboard/orders">Admin Orders</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;