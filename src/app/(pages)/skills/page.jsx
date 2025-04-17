"use client";
import { motion } from "framer-motion";
import React from 'react';

const skillsData = [
    {
        title: "Languages",
        skills: ["C#", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
        title: "Frameworks & Libraries",
        skills: [
            "ASP.NET Core",
            "Entity Framework Core",
            "Blazor",
            "SignalR",
            "MVC",
            "Web API",
            "React.js",
            "Angular",
            "jQuery",
            "Bootstrap",
            "Material-UI",
            "Node.js"
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            "Visual Studio",
            "VS Code",
            "Git",
            "GitHub",
            "Trello",
            "Microsoft Outlook",
            "SQL Server 2018/2019/2020",
            "MongoDB",
            "NPM",
            "Docker",
            "Azure"
        ],
    },
];

const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.2, ease: "easeOut" },
    }),
};


const Page = () => {
    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-24 lg:py-32">
            <div className="container px-6 md:px-12 mx-auto">
                {/* Section Heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                        Technical Skills
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-400 md:text-lg">
                        My expertise spans across the entire .NET ecosystem and related technologies.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariants}
                            className="p-6 bg-gray-800 rounded-xl shadow-lg  hover:scale-105 hover:shadow-xl"
                        >
                            <h3 className="text-xl font-semibold text-white border-l-4 border-violet-500 pl-3">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm font-medium bg-violet-500 text-white rounded-lg transition duration-300 hover:bg-violet-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Page;
