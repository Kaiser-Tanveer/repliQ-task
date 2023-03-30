import React from 'react';
import { Zoom } from 'react-reveal';
import { Link } from 'react-router-dom';
import mainBanner from '../../../Assets/Banner/mainBanner.png';
import { HiOutlineLogin } from 'react-icons/hi';

const Banner = () => {
    return (
        <div className='my-10 shadow-lg container rounded-b-lg relative mx-auto'>
            <div>
                <Zoom>
                    <h2 className='text-5xl ml-5 md:ml-0 font-bold text-sky-400 text-center lg:text-left z-10 absolute md:left-1/3 lg:left-1/2 lg:top-1/4' style={{ WebkitTextStroke: '1px #ffffff' }}>Buy Your Daily<br /> Accessories <br /> Here</h2>
                </Zoom>
            </div>
            <div className='absolute left-1/4 md:left-1/2 top-2/3 z-30'>
                <Link to="/logIn" className='btn text-gray-100 bg-pink-400 hover:bg-pink-600 font-semibold border border-white hover:scale-110 shadow-lg'>CONTINUE <HiOutlineLogin className='text-xl ml-2' /> </Link>
            </div>
            <div className='rounded-b-lg bg-pink-400 grid grid-cols-1 md:grid-cols-2 h-80 md:h-full' style={{
                clipPath: 'polygon(0 0, 100% calc(80% - 100vw), calc(85% - 50vw) 100%, 0 100%)'
            }}>
                <div className='w-full'>
                    <Zoom>
                        <img src={mainBanner} className="mt-14 w-full hidden md:block" alt="Banner" />
                    </Zoom>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Banner;