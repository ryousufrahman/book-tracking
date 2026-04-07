import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { BookContext } from "../../GlobalContext";

const Navbar = () => {

      const bookcontext =useContext(BookContext)
      const {markRead} = bookcontext

    const links = <>
    
           <li><NavLink to={'/'} className={({isActive}) => isActive? 'text-green-500 border border-green-500' : ''}>Home</NavLink></li>
              <li><NavLink to={'/ListedBooks'} className={({isActive}) => isActive? 'text-green-500 border border-green-500' : ''}> Listed Books <span className={`bg-green-500 px-2 rounded-full text-white ${markRead.length ==0 ? 'hidden': 'block'} $`}>{markRead.length}</span> </NavLink></li>
              <li><NavLink to={'/books'} className={({isActive}) => isActive? 'text-green-500 border border-green-500' : ''}>Books</NavLink></li>
        <li><NavLink to={'/pages'} className={({isActive}) => isActive? 'text-green-500 border border-green-500' : ''}>Pages-to-Read</NavLink></li>
    
    </>

        
    
  return (
    <>
      <div className="bg-base-100 shadow-sm">
        <div className="navbar  container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
              >
               {links}
              </ul>
            </div>
            <h2 className=" text-2xl font-bold">Book Vibe</h2>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
                {links}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-2">
              <button className="btn btn-success">Sign-In</button>
              <button className="btn btn-accent">Sign-Up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
