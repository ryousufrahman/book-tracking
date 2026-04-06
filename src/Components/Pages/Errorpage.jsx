import React from "react";
import { Link } from "react-router";

const Errorpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <div className="text-center max-w-xl">
        
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-400 mt-3">
          The page you’re looking for doesn’t exist or has been moved. 
          Let’s get you back on track.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition transform shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl border border-gray-600 hover:bg-gray-700 transition"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Glow */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-purple-500 to-pink-500"></div>
      </div>
    </div>
  );
};

export default Errorpage;