import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../assets/images/my-image.jpg'

const Navbar = () => {
    const menuItems = <>
        <li><a href='/#works'>Works</a></li>
        <li><a href='/#contact'>Contact Me</a></li>
    </>

    return (
        <nav className='backdrop-blur-2xl py-3 border-b-base-100 border-b-2'>
            <div className="navbar bg-base-100 container m-auto bg-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={Profile} alt='' />
                        </div>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">DevAsFahim</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="ml-4">
                    <a href='Abu Saleh Md Fahim.pdf' download='Abu Saleh Md Fahim.pdf' className="btn btn-outline btn-warning">Resume</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;