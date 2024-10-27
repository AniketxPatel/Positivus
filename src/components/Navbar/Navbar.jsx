// import React from 'react';

// export default function Navbar() {
//     return (
//         <nav className="flex items-center justify-around px-8 py-4 bg-white ">

//             <div className="flex items-center">
//                 <img
//                     className="h-9 w-auto pl-10"
//                     src="https://positivustheme.vercel.app/Logo.svg"
//                     alt="Positivus Logo"
//                 />
//             </div>

//             <ul className="font-normal text-2xl flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0">
//                 <li><a href="#" className="text-black hover:text-gray-600">About us</a></li>
//                 <li><a href="#" className="text-black hover:text-gray-600">Services</a></li>
//                 <li><a href="#" className="text-black hover:text-gray-600">Use Cases</a></li>
//                 <li><a href="#" className="text-black hover:text-gray-600">Pricing</a></li>
//                 <li><a href="#" className="text-black hover:text-gray-600">Blog</a></li>
//             </ul>

//             <button className="py-5 px-9 text-2xl rounded-xl border border-black borde-r hover:bg-black hover:text-white transition">
//                 Request a quote
//             </button>
//         </nav>
//     );
// }
import React, { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between px-12 py-6 bg-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center">
                <img
                    className="h-10 pl-20 w-auto"
                    src="https://positivustheme.vercel.app/Logo.svg"
                    alt="Positivus Logo"
                />
            </div>

            {/* Navigation Links */}
            <ul
                className={`font-normal text-lg flex-grow flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0 
                lg:space-x-8 ${isOpen ? 'block' : 'hidden'} lg:flex`}
            >
                <li>
                    <a href="#" className="text-black hover:text-gray-600 py-2">
                        About us
                    </a>
                </li>
                <li>
                    <a href="#" className="text-black hover:text-gray-600 py-2">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" className="text-black hover:text-gray-600 py-2">
                        Use Cases
                    </a>
                </li>
                <li>
                    <a href="#" className="text-black hover:text-gray-600 py-2">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="#" className="text-black hover:text-gray-600 py-2">
                        Blog
                    </a>
                </li>
                <button className="py-4 px-10 text-lg lg:text-2xl rounded-xl border border-black hover:bg-black hover:text-white transition">
                    Request a quote
                </button>
            </ul>

            {/* Hamburger Menu */}
            <button
                className="lg:hidden flex items-center text-2xl focus:outline-none"
                onClick={toggleMenu}
            >
                {isOpen ? '✖' : '☰'} {/* Toggle Icon */}
            </button>
        </nav>
    );
}
