    // // ServiceCard.jsx
    // import React from 'react';

    // export default function Card() {
    //     return (
    //         <div className="bg-slate-600 rounded-3xl shadow-md p-6 flex items-center justify-around w-[600px] h-[250px] ml-8 border-b-4 border-black ">
    //             {/* Left Text Section */}
    //             <div className="flex flex-col space-y-4">
    //                 <h2 className="bg-lime-400 text-black font-bold text-lg rounded-md p-1.5">
    //                     Search engine 
    //                 </h2>
    //                 <h2 className="bg-lime-400 text-black font-bold text-lg rounded-md pt-1.5">
    //                     optimization
    //                 </h2>
    //                 <a href="#" className="flex items-center space-x-2 text-black hover:text-gray-800">
    //                     <span className="bg-black p-1.5 rounded-full text-lime-400">
    //                         <i className="fas fa-arrow-right"></i>
    //                     </span>
    //                     <span className="text-lg font-semibold">Learn more</span>
    //                 </a>
    //             </div>
    //             {/* Image Right Section */}
    //             <img
    //                 src="https://positivustheme.vercel.app/services/05.svg"
    //                 alt="SEO Illustration"
    //                 className="w-40 h-auto"
    //             />
    //         </div>
    //     );
    // };


    import React from 'react';

export default function CardStruct({ title, subtitle, link, imageSrc, cardType }) {
    const cardStyles =
        cardType === 'left'
            ? 'bg-gray-200 text-black'
            : 'bg-lime-400 text-black';

    return (
        <div
            className={`rounded-3xl shadow-md p-6 flex flex-col md:flex-row items-center 
            justify-between w-full max-w-xl md:max-w-2xl lg:w-[600px] h-auto md:h-[310px] 
            mx-auto md:ml-8 mt-20 border-2 border-b-4 border-black ${cardStyles}`}
        >
            {/* Left Text Section */}
            <div className="flex flex-col justify-center items-start space-y-4 p-3 text-center md:text-left">
                <h2 className="h-auto w-auto bg-lime-400 text-black font-semibold text-2xl md:text-3xl rounded-lg px-5 py-2">
                    {title}
                </h2>
                <h2 className="h-auto w-auto bg-lime-400 text-black font-semibold text-2xl md:text-3xl rounded-lg px-5 py-2">
                    {subtitle}
                </h2>
                <a href={link} className="flex items-center space-x-2 text-black hover:text-gray-800 mt-6">
                    <span className="flex items-center justify-center w-10 h-10 bg-black rounded-full text-lime-400">
                        <i className="fas fa-arrow-right text-xl"></i>
                    </span>
                    <span className="text-lg font-semibold">Learn more</span>
                </a>
            </div>

            {/* Image Section */}
            <div className="mt-6 md:mt-0">
                <img
                    src={imageSrc}
                    alt={`${title} Illustration`}
                    className="w-[170px] h-auto md:w-[210px] object-contain"
                />
            </div>
        </div>
    );
}
