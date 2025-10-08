import React from 'react';
import bookImage from '../../assets/pngwing 1.png'

const Banner = () => {
    return (
     <div className="hero bg-base-200 h-[554] w-[1165] mt-2">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={bookImage}
      className="max-w-sm rounded-lg"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br/> your bookshelf</h1>
      
      <button className="bg-[#23BE0A] text-white rounded-lg p-4 mt-4">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;