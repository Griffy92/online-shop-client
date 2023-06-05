import React from 'react';
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <div>            
        <footer class="bg-white shadow dark:bg-gray-800">
            <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline"> WebPage</a>. Lefts Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 ">Footer Item 1</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Footer Item 2</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6">Footer Item 3</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Footer Item 4</a>
                    </li>
                </ul>
            </div>
        </footer>

        </div>
    );
};

export default Footer;