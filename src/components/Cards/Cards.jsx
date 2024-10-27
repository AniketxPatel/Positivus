// App.jsx
import React from 'react';
import CardStruct from './CardStruct';

function App() {
    return (
        <div className="ml-10"> {/* Added margin-left to shift everything 40px to the right */}
            <div className="flex flex-col items-center md:flex-row md:justify-center md:w-full ">
                <div className="flex flex-col md:flex-row justify-center w-full md:w-auto gap-11">
                    <CardStruct
                        title="Search engine"
                        subtitle="optimization"
                        link="#"
                        imageSrc="https://positivustheme.vercel.app/services/05.svg"
                        cardType="left"
                    />
                    <CardStruct
                        title="Pay-per-click"
                        subtitle="strategies"
                        link="#"
                        imageSrc="https://positivustheme.vercel.app/services/06.svg"
                        cardType="right"
                    />
                </div>
            </div>
            <div className="flex flex-col items-center text-center p-6 -m-2 mt-20 gap-7 ml-10           md:flex-row md:justify-evenly md:mt-12">
                <h2 className="w-auto sm:w-auto px-1 text-3xl sm:text-4xl font-semibold bg-lime-300 rounded-md">Our Working Process</h2>
                <p className="text-lg sm:text-xl font-normal text-center md:text-start lg:w-2/3">Step-by-step Guide to Achieving <br />Your Business Goals</p>
            </div>
        </div>
    );
}

export default App;
