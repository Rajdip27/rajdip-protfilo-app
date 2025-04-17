"use client";
import React from 'react';
import { motion } from "framer-motion";
const page = () => {
    const experiences = [
        {
            title: "Jr. Software Engineer (ASP.NET Core)",
            company: "Piistech Limited",
            duration: "March 2024 – Present",
            description:
                "Currently contributing to HR, payroll, and inventory management systems using ASP.NET Core and Entity Framework Core.",
            responsibilities: [
                "Developing and maintaining HR and inventory management systems using ASP.NET Core MVC",
                "Utilizing Entity Framework Core for data access and SQL Server 2018 for database management",
                "Collaborating with the team to deliver scalable, maintainable enterprise solutions",
                "Participating in ongoing development of e-commerce inventory modules",
            ],
        },
        {
            title: "Jr. Software Engineer (ASP.NET Core)",
            company: "TechSoft Limited",
            duration: "January 2023 – February 2024",
            description:
                "Worked on LMS and Job Portal Management Systems focusing on ASP.NET Core and Microsoft SQL Server.",
            responsibilities: [
                "Developed web features for LMS and JPMS platforms using ASP.NET Core",
                "Used SQL Server 2018 and Entity Framework Core for database handling",
                "Customized ERP modules and implemented client-specific features",
                "Worked closely with cross-functional teams for software deployment and feedback",
            ],
        },
        {
            title: "Software Development Intern",
            company: "Tactsoft Limited",
            duration: "September 2022 – December 2022",
            description:
                "Gained hands-on experience in .NET development and relational databases.",
            responsibilities: [
                "Assisted in developing internal tools using ASP.NET and SQL Server 2019",
                "Learned version control with Git and project management using Trello",
                "Participated in team meetings and sprint planning",
            ],
        },
        {
            title: "Professional Training",
            company: "Sky IT Ltd. (Barisal)",
            duration: "2021 – 2022",
            description:
                "Completed professional training in ASP.NET Core, C# OOP, and MS SQL Server.",
            responsibilities: [
                "Learned full-stack web development fundamentals using .NET technologies",
                "Practiced real-world scenarios and mini-projects in a structured environment",
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
    }

    return (
        <section id="experience" className="w-full py-16 md:py-24 lg:py-32">
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
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariants}
                            className="flex flex-col md:flex-row gap-6 md:gap-10 bg-gray-950 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2"
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
                                        <li key={i} className="hover:text-violet-300 transition-all duration-200">
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default page;