import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='h-[100vh] pt-[40vh]'>
            <h1 className='text-8xl text-center text-transparent animate-pulse bg-gradient-to-r bg-clip-text from-pink-500 to-sky-500 font-bold'>RepliQ-Task</h1>
            <div className='flex mx-auto justify-center'>
                <MagnifyingGlass
                    visible={true}
                    height="180"
                    width="180"
                    ariaLabel="MagnifyingGlass-loading"
                    wrapperStyle={{}}
                    wrapperClass="MagnifyingGlass-wrapper"
                    glassColor='#4dd0fb'
                    color='#ec4899 '
                />
            </div>
        </div>
    );
};

export default Spinner;