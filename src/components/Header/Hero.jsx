// import React from 'react'

// export default function Header() {
//     return (
//         <div className='h-150 px-31rem colr'>
//             <h1>Navigating the digital landscape for success</h1>
//             <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.  </p>
//             <button className="py-5 px-9 text-2xl rounded-xl border border-black borde-r hover:bg-black hover:text-white transition">Book a consultation</button>
//             <img src="https://positivustheme.vercel.app/Hero.svg" alt="" />
//         </div>
//     )
// }

import React from 'react';

export default function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between h-auto lg:h-[40rem] px-6 lg:px-32 py-12 bg-white">
                <div className="lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black mb-6 leading-tight">
                        Navigating the<br />
                        digital landscape <br />
                        for success
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                        Our digital marketing agency helps businesses grow and <br />
                        succeed online through a range of services including SEO,<br />
                        PPC, social media marketing, and content creation.
                    </p>
                    <button className="py-4 px-8 text-xl sm:text-2xl rounded-xl border border-black bg-black text-white hover:bg-white hover:text-black transition">
                        Book a consultation
                    </button>
                </div>

                <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <img
                        className="w-full max-w-lg object-contain"
                        src="https://positivustheme.vercel.app/Hero.svg"
                        alt="Digital Marketing Illustration"
                    />
                </div>
            </div>

            {/* Clients Section */}
            <div className="flex flex-wrap justify-evenly px-4 -m-2">
                {["01", "02", "03", "04", "05", "06"].map((client) => (
                    <img
                        key={client}
                        className="p-4 w-1/2 sm:w-1/3 lg:w-auto grayscale transition duration-200 hover:grayscale-0"
                        src={`https://positivustheme.vercel.app/clients/${client}.svg`}
                        alt={`Client ${client}`}
                    />
                ))}
            </div>

            {/* Services Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-12 -m-2 mt-20">
                <h2 className="px-3 text-4xl sm:text-5xl font-medium bg-lime-300 rounded-md mb-6 md:mb-0">
                    Services
                </h2>
                <p className="text-xl font-normal text-center md:text-start lg:w-2/3 leading-relaxed">
                    At our digital marketing agency, we offer a range of services to <br />
                    help businesses grow and succeed online. These services include:
                </p>
            </div>
        </div>
    );
}
