import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Zoom } from 'react-reveal';
import { FaUserAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import useTitle from '../../Components/MyHooks/useTitle';
import setAuthToken from '../../Components/setAuthToken/setAuthToken';

const LogIn = () => {
    useTitle('Login');
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const from = location?.state?.form?.pathname || '/';
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm();

    // Login Handler 
    const submitHandler = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
                if (result) {
                    toast.success('Logged in Successfully!');
                    navigate(from, { replace: true });
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div className='lg:w-5/6 my-20 lg:my-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
            <Zoom>
                <div className='w-3/4 mx-auto py-20'>
                    <h2 className="text-5xl text-pink-500 text-center font-bold">Login</h2>
                    <p className='py-6 text-center text-xl text-gray-600'>If you registered before, then log in..</p>
                    <hr className=' border text-gray-800 border-pink-500' />
                </div>
            </Zoom>
            <Zoom>
                <div className="bg-info lg:w-3/4 mx-auto flex items-center relative justify-center text-center text-gray-800 rounded-lg shadow-lg shadow-error-focus">
                    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col w-full max-w-lg p-12 shadow-lg shadow-error text-gray-800 ng-untouched ng-pristine ng-valid rounded-lg">
                        <FaUserAlt className='absolute -top-12 left-28 lg:left-36 p-2 border-2 border-gray-700 bg-info rounded-full text-8xl' />
                        <label className="self-start text-xs mt-2 font-semibold">Your Email</label>
                        <input
                            {...register("email", { required: "Email is required." })}
                            type="email" placeholder='xyz@gmail.com' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-pink-500 focus:ring-pink-500" required />
                        {errors.email && <p className='text-error'>{errors.email.message}</p>}
                        <label className="self-start mt-3 text-xs font-semibold">Password</label>
                        <input
                            {...register("password", { required: "Password is required.", pattern: { value: '/(?=.*[a-z])(?=.*[A-Z])/', message: 'Password must contain uppercase and lowercase' } })}
                            type="password" placeholder='password' className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 focus:border-pink-500 focus:ring-pink-500" required />
                        {errors.password && <p className='text-error'>{errors.password.message}</p>}
                        <div className='mt-6'>
                            <button type="submit" className=
                                "flex w-full items-center justify-center h-12 px-6 text-sm font-semibold rounded bg-pink-500 text-gray-800 uppercase">Login</button>
                        </div>
                        <div className="flex justify-center mt-6 space-x-2 text-xs">
                            <p className="text-gray-600 text-[16px]">New to RepliQ-Task? Please <Link className='link-hover font-semibold text-gray-900' to='/reg'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </Zoom>
        </div>
    );
};

export default LogIn;