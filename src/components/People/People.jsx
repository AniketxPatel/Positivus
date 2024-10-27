import { useState } from "react";

const testimonials = [
    {
        id: 1,
        text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp",
    },
    {
        id: 2,
        text: "Their dedication and expertise have been instrumental in helping us achieve our business goals. The professionalism and support we received from Positivus are unmatched.",
        name: "Jane Doe",
        position: "Founder of ABC Inc.",
    },
    {
        id: 3,
        text: "Working with Positivus has been an absolute pleasure. Their team is committed to excellence and delivers measurable results.",
        name: "Michael Lee",
        position: "CEO of Tech Solutions",
    },
];

export default function People() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
            <div className="max-w-4xl w-full md:h-96 bg-gray-900 p-8 rounded-xl relative mx-auto">
                {/* Testimonial Content */}
                <div className="relative">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`transition-all duration-500 ease-in-out 
                                ${index === currentIndex ? "opacity-100" : "opacity-0 absolute"}`}
                        >
                            {/* Comment Box */}
 <div className="relative bg-gray-800 border border-lime-400 rounded-lg p-6 shadow-lg">
                                <p className="text-white text-xl leading-relaxed">
                                    ”{testimonial.text}”
                                </p>
                                <div className="absolute bottom-0 left-10 transform translate-y-1/2 w-6 h-6 bg-gray-800 border-lime-400 border-l border-b rotate-45"></div>
                            </div>

                            {/* Author Information */}
                            <div className="mt-6">
                                <p className="text-lime-400 font-semibold">{testimonial.name}</p>
                                <p className="text-white">{testimonial.position}</p>
                            </div>
                        </div>
                    ))}

                    {/* Pagination Dots */}
                    <div className="flex justify-center items-center mt-6 space-x-2">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-4 h-4 rounded-full ${index === currentIndex ? "bg-lime-400" : "bg-white"}`}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="absolute top-1/2 left-[-2.5rem] transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 
                transition w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    onClick={prevTestimonial}
                >
                    ←
                </button>
                <button
                    className="absolute top-1/2 right-[-2.5rem] transform -translate-y-1/2 text-white bg-gray-800 hover:bg-gray-700 
                transition w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    onClick={nextTestimonial}
                >
                    →
                </button>
            </div>
        </div>
    );
}