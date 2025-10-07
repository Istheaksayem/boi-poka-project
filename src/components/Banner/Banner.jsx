import React from 'react';
import bookImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
        <div className='flex justify-between items-center w-full p-16 bg-gray-100 mt-4 mb-4'>
            <div>
                <h2 className='text-4xl font-bold mb-4'>Books to freshen up <br/> your bookshelf</h2>
                <button className='bg-[#23BE0A] text-white p-4 rounded-lg '>View The List</button>
            </div>
            <div>
                <img className='w-3/5' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;