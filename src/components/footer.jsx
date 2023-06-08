import React from 'react';
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <div>            
        <footer className="bg-white shadow dark:bg-gray-800">
            <div className="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white-500 sm:text-center dark:text-white-400">© 2023 <a href="/" className="hover:underline"> Pocket Cart</a>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white-500 dark:text-white-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Help</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Quicklinks</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Customer Care</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Social Media</a>
                    </li>
                </ul>
            </div>
        </footer>

        </div>
    );
};

export default Footer;