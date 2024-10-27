// export default function Footer() {
//     return (
//         <footer className="h-[30rem] bg-slate-900">
//             <div className="min-h flex justify-evenly text-slate-200">
//                 <div className="flex items-center ">
//                     <img
//                         className="h-9 w-auto pl-10 bg-blend-color"
//                         src="https://positivustheme.vercel.app/Logo.svg"
//                         alt="Positivus Logo"
//                     />
//                 </div>

//                 <ul className="font-normal text-2xl flex flex-col p-4 lg:p-0 mt-4 border rounded-lg lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 ">
//                     <li><a href="#" className=" hover:text-gray-600">About us</a></li>
//                     <li><a href="#" className=" hover:text-gray-600">Services</a></li>
//                     <li><a href="#" className=" hover:text-gray-600">Use Cases</a></li>
//                     <li><a href="#" className=" hover:text-gray-600">Pricing</a></li>
//                     <li><a href="#" className=" hover:text-gray-600">Blog</a></li>
//                 </ul>

//                 <div>
//                     <i className="fa-brands fa-linkedin"></i>
//                     <i className="fa-brands fa-facebook"></i>
//                     <i className="fa-brands fa-twitter"></i>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// Footer;


// Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 rounded-t-[45px] mt-20">
            <div className="container mx-auto px-6">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-8 lg:space-y-0">
                    {/* Left Section */}
                    <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-10">
                        <h1 className="text-3xl font-normal">Positivus</h1>
                        <ul className="flex flex-wrap justify-center lg:justify-start space-x-6 gap-y-4">
                            <li><a href="#" className="hover:text-gray-300 underline">About us</a></li>
                            <li><a href="#" className="hover:text-gray-300 underline">Services</a></li>
                            <li><a href="#" className="hover:text-gray-300 underline">Use Cases</a></li>
                            <li><a href="#" className="hover:text-gray-300 underline">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-300 underline">Blog</a></li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center space-x-4">
                        <a href="#" className="h-7 w-7 bg-white rounded-full hover:bg-gray-700 flex justify-center items-center">
                            <i className="fab fa-linkedin text-black"></i>
                        </a>
                        <a href="#" className="h-7 w-7 bg-white rounded-full hover:bg-gray-700 flex justify-center items-center">
                            <i className="fab fa-facebook text-black"></i>
                        </a>
                        <a href="#" className="h-7 w-7 bg-white rounded-full hover:bg-gray-700 flex justify-center items-center">
                            <i className="fab fa-twitter text-black"></i>
                        </a>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h2 className="text-lg bg-lime-400 text-black rounded-lg px-4 py-1 text-center font-semibold inline-block mx-auto">
                            Contact us:
                        </h2>

                        <p>Email: info@positivus.com</p>
                        <p>Phone: 555-567-8901</p>
                        <p>
                            Address: 1234 Main St, <br />
                            Moonstone City, Stardust State 12345
                        </p>
                    </div>

                    {/* Subscribe Form */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="flex flex-col md:flex-row items-center gap-4 bg-gray-800 p-6 rounded-2xl">
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-4 w-full md:w-72 h-12 rounded-xl border border-white focus:outline-none 
                                bg-gray-800 text-white placeholder-white"
                            />
                            <button className="w-full md:w-60 h-12 bg-lime-400 hover:bg-green-500 text-xl 
                            text-gray-900 rounded-xl">
                                Subscribe to news
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-4 lg:space-y-0">
                    <p>© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
