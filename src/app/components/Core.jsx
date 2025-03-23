import React from "react";
import Link from "next/link";
import { FaArrowRight, FaCode, FaDatabase, FaServer } from "react-icons/fa";

const expertiseData = [
    {
        icon: <FaCode className="h-10 w-10 text-violet-500" />,
        title: "Web Development",
        description: "Creating responsive, accessible web applications with ASP.NET MVC and Razor Pages.",
    },
    {
        icon: <FaServer className="h-10 w-10 text-violet-500" />,
        title: "API Development",
        description: "Building RESTful APIs and microservices with ASP.NET Core Web API.",
    },
    {
        icon: <FaDatabase className="h-10 w-10 text-violet-500" />,
        title: "Database Integration",
        description: "Working with Entity Framework Core, SQL Server, and other database technologies.",
    },
];

const Core = () => {
    return (
        <section className="py-16 bg-[#18181a]">
            <div className="mx-auto px-6 text-center">
                {/* Title */}
                <div className="max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold text-white">Core Expertise</h2>
                    <p className="text-lg text-gray-400 mt-3">
                        Specialized in building modern web applications with ASP.NET Core.
                    </p>
                </div>

                {/* Expertise Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {expertiseData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 border border-gray-700 shadow-lg rounded-xl transform transition duration-300 hover:scale-105 hover:bg-[#2d2d30] hover:shadow-xl"
                        >
                            <div className="p-4 rounded-full bg-[#2d2d30]">{item.icon}</div>
                            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-center text-gray-300">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="mt-12">
                    <Link
                        href="/skills"
                        className="inline-flex items-center border border-gray-700 px-6 py-3 text-lg font-medium text-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-violet-500"
                    >
                        View All Skills <FaArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Core;
