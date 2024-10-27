import { useState } from "react";

const steps = [
    {
        id: 1,
        title: "Consultation",
        description:
            "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
        id: 2,
        title: "Research and Strategy Development",
        description:
            "Our team will conduct thorough research to identify the best strategies for your business, taking into account the industry landscape and customer trends.",
    },
];

export default function About() {
    const [openStep, setOpenStep] = useState(1);

    const toggleStep = (id) => {
        setOpenStep(openStep === id ? null : id);
    };

    return (
        <div className="px-12 py-8">
            {steps.map((step) => (
                <div
                    key={step.id}
                    className={`mb-4 p-10 rounded-[45px] transition-all duration-300 
            ${openStep === step.id ? "bg-lime-300" : "bg-gray-100"} 
            border border-black shadow-[0_5px_10px_rgba(0,0,0,0.8)]`}
                >
                    <div
                        className="flex flex-col cursor-pointer"
                        onClick={() => toggleStep(step.id)}
                    >
                        {/* Render the description and a horizontal line when open */}
                        {openStep === step.id && (
                            <>
                                <hr className="border-t border-black mb-4" />
                                <p className="text-lg text-black mb-2">{step.description}</p>
                            </>
                        )}

                        {/* Heading and toggle button */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-[38px] font-semibold py-6">
                                {String(step.id).padStart(2, "0")} {step.title}
                            </h3>
                            <button className="text-2xl font-bold">
                                {openStep === step.id ? "−" : "+"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
