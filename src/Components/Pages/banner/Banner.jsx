import React from "react";
import heroImg from '../../../assets/hero_img.jpg'

const Banner = () => {
  return (
    <div className="mt-6 ">
      <div className="hero bg-base-200 container mx-auto ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between ">
          <img
            src={heroImg}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">Books to freshen up <br /> your bookshelf</h1>
            
            <button className="btn btn-success">View The list</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
