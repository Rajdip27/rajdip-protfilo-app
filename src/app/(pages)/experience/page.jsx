import React from 'react';

const page = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Piis Tech.",
            duration: "2024 - Present",
            description: "Lead developer for enterprise-level ASP.NET Core applications, focusing on microservices architecture and cloud deployment.",
            responsibilities: [
                "Architected and developed scalable web applications using ASP.NET Core and Blazor",
                "Implemented CI/CD pipelines for automated testing and deployment to Azure",
                "Mentored junior developers and conducted code reviews",
                "Optimized database performance and implemented efficient data access patterns",
            ],
        },
        {
            title: ".NET Developer",
            company: "Soft Tech.",
            duration: "2023 - 2024",
            description: "Developed and maintained web applications using ASP.NET Core, focusing on RESTful APIs and database integration.",
            responsibilities: [
                "Built RESTful APIs using ASP.NET Core Web API",
                "Implemented data access layers using Entity Framework Core",
                "Integrated third-party services and payment gateways",
                "Collaborated with frontend developers to create seamless user experiences",
            ],
        },
    ];

    return (
        <section id="experience" className="w-full py-16 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Section Heading */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Work Experience</h2>
                        <p className="max-w-[900px] text-gray-400 md:text-xl lg:text-lg xl:text-xl">
                            My professional journey as an ASP.NET developer
                        </p>
                    </div>
                </div>

                {/* Experience List */}
                <div className="space-y-8 mt-12">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row gap-6 md:gap-10 bg-gray-950 p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                        >
                            {/* Job Details */}
                            <div className="md:w-1/3 border-l-4 border-violet-500 pl-4">
                                <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
                                <p className="text-violet-400 text-lg">{experience.company}</p>
                                <p className="text-sm text-gray-500">{experience.duration}</p>
                            </div>

                            {/* Job Description */}
                            <div className="md:w-2/3">
                                <p className="text-gray-300 mb-4">{experience.description}</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    {experience.responsibilities.map((task, i) => (
                                        <li key={i} className="hover:text-violet-300 transition-all duration-200">{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default page;