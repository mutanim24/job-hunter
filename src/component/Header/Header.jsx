import React from 'react';
import "./Header.css"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between items-center px-20 py-7 gap-3 md:py-10'>
            <Link className='text-4xl font-bold' to="/">JobHunter</Link>
            <ul className='md:flex md:space-x-8 items-center font-semibold'>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-500' : ''} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-500' : ''} to="/statistic">Statistic</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-500' : ''} to="/applied">Applied Job</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'text-cyan-500' : ''} to="/blog">Blog</NavLink>
                </li>
            </ul>
            <button className='text-white text-xl rounded bg-gradient-to-r from-cyan-600 to-purple-500 p-1 px-3'>Start Applying</button>
        </div>

    );
};

export default Header;