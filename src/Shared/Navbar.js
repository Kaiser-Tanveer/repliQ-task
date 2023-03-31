import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiOutlineHome, HiOutlineShoppingCart } from 'react-icons/hi';
import { AuthContext } from '../Contexts/AuthContext/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    // Logout Handler 
    const signOutHandler = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err));
    }

    // Creaing variable for the menu 
    const menuItems = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? 'flex rounded-md bg-info items-center text-xl m-2 lg:text-base' : undefined
        }><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Home</span></NavLink></li>
        <li><NavLink to='/shop' className={({ isActive }) =>
            isActive ? 'flex rounded-md bg-info items-center text-xl m-2 lg:text-base' : undefined
        }><HiOutlineHome className='lg:hidden' /><span className='ml-2'>Shop</span></NavLink></li>
        <li><NavLink to='/cart' className={({ isActive }) =>
            isActive ? 'flex rounded-md bg-info items-center text-xl m-2 lg:text-base' : undefined
        }><HiOutlineShoppingCart className='lg:hidden' /><span className='ml-2'>Cart</span></NavLink></li>
    </>
    return (
        <div className="navbar fixed top-0 glass p-0 pr-5 mx-auto shadow-lg z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <HiMenu className='text-2xl' />
                    </label>
                    <ul tabIndex={0} className="menu -ml-2 duration-1000 h-[100vh] w-[50vw] menu-compact dropdown-content mt-3 p-2 shadow-xl bg-gray-100">
                        {menuItems}
                    </ul>
                </div>
                <Link className="text-2xl font-semibold text-sky-500 lg:ml-5">RQ Task</Link>
            </div>
            <div className="hidden lg:flex items-center">
                <ul className="menu text-base-content menu-horizontal">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <Link onClick={signOutHandler} className='flex bg-gray-100 rounded-md py-1 px-3 text-xl font-semibold text-pink-500 hover:bg-pink-400 items-center border-[3px] border-pink-500 hover:border-gray-200 hover:text-gray-200 hover:scale-110 duration-500'>
                            Logout
                        </Link>
                        :
                        <Link to='/reg' className='flex text-xl font-semibold py-1 px-3 bg-sky-500 rounded-lg text-gray-100 items-center border-[3px] border-gray-100 hover:border-sky-500 hover:bg-gray-200 hover:text-sky-500 hover:scale-110 duration-500'>
                            Register
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;