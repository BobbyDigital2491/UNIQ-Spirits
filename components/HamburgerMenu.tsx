/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';

const HamburgerMenu: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <div className="relative">
            <button
                id="navbar-toggle"
                type="button"
                className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
                onClick={toggleMenu}
            >
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div
                id="dropdown-menu"
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } absolute top-full left-0 lg:hidden`}
            >
                <br/>
                <ul className="flex flex-col font-medium mt-4 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-white md:dark:bg-transparent dark:border-gray-700">
                <li>
                <a href="/home" className="block py-2 pl-3 pr-4 text-white hover:text-black bg-red-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-red-600 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-gray-400 md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                <a href="/Shop" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-gray-400 md:border-0 md:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Products</a>
                </li>
                <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-400 md:hover:bg-gray-400 md:border-0 md:hover:hover:text-black md:p-0 dark:text-black md:dark:hover:text-black dark:hover:bg-gray-400 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
