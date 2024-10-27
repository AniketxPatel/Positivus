import React from 'react';

export default function AboutStruct({ title, description, icon, direction, bgColor }) {
    return (
        <div className={`bg-${bgColor} p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center`}>
            <div className={`flex-1 mb-4 md:mb-0 md:mr-4`}>
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className={`flex items-center justify-center mb-4 md:mb-0`}>
                <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center`}>
                    {icon}
                </div>
            </div>
            <div className={`ml-0 md:ml-4`}>
                <button className={`text-2xl font-bold ${direction === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {direction === 'up' ? '+' : '-'}
                </button>
            </div>
        </div>
    );
}
