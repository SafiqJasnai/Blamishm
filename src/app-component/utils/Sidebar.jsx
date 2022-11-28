import React from 'react';
import SVGChevronRight from '../svg/SVGChevronRight';

const Sidebar = () => {
    return (
        <div class="flex pt-5 px-5 bg-lime-200 rounded dark:bg-gray-800 w-max">
            <ul class="space-y-5">
                <li>
                    <a href="/predict-age" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">Predict Your Age</span>
                    </a>
                </li>
                <li>
                    <a href="/predict-gender" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">Predict Your Gender</span>
                    </a>
                </li>
                <li>
                    <a href="/predict-nationality" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">Predict Your Nationality</span>
                    </a>
                </li>
                <li>
                    <a href="/random-task" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">Generate Random Task</span>
                    </a>
                </li>
                <li>
                    <a href="/uni-list" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">University Based on Country</span>
                    </a>
                </li>
                <li>
                    <a href="/ip" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">Get Your IP</span>
                    </a>
                </li>
                <li>
                    <a href="/ip-location" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-lime-100 dark:hover:bg-gray-700">
                    <SVGChevronRight />
                    <span class="ml-3">Get IP Location</span>
                    </a>
                </li>
                {/* <li>
                    <a href="/overview" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span class="ml-3">Overview</span>
                    </a>
                </li>
                <li>
                    <a href="/inventory" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Inventory</span>
                    </a>
                </li>
                <li>
                    <a href="/purchase" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Purchase</span>
                    </a>
                </li> */}
                {/* <li>
                    <a href="#" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                    </a>
                </li> */}
                {/* <li>
                    <a href="/products" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                    </a>
                </li>
                <li>
                    <a href="/transaction" class="flex items-center p-2 text-sm font-normal text-lime-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-lime-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Transaction History</span>
                    </a>
                </li> */}
            </ul>
        </div>
    );
};

export default Sidebar;