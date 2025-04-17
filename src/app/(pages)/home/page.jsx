'use client'
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
    return (
        <section className="w-full pt-20 py-8 md:py-24 lg:py-28 xl:py-32 bg-black">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_600px] lg:gap-12">
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tighter text-white">
                                ASP.NET Core Developer
                            </h1>
                            <p className="md:text-xl text-white mt-4">
                                Hello! I'm Santanu Chandra Shialy,{" "}
                                <span className="block mt-2">
                                    <Typewriter
                                        words={[
                                            'a dedicated ASP.NET Developer with a passion for building robust and scalable web applications.',
                                        ]}
                                        loop={1}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={0}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </p>
                        </div>

                        <div className="flex flex-col lg:flex-row md:flex-row md:justify-center lg:justify-start sm:items-center md:items-center gap-4">
                            <Link
                                href="/projects"
                                className="px-4 py-2 text-lg font-medium text-black bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            >
                                View My Work
                            </Link>
                            <Link
                                href="/contact"
                                className="px-4 py-2 text-lg font-medium text-white border border-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            >
                                Contact Me
                            </Link>
                        </div>

                        <div className="flex justify-center lg:justify-start flex-wrap gap-4 sm:gap-6 mt-4">
                            {[
                                {
                                    href: "https://github.com/Rajdip27",
                                    icon: <FaGithub className="text-xl sm:text-2xl" />,
                                    shadow: "shadow-gray-500/50",
                                },
                                {
                                    href: "https://www.linkedin.com/in/rajdip-raj-santanu-7b0175253/",
                                    icon: <FaLinkedinIn className="text-xl sm:text-2xl" />,
                                    shadow: "shadow-blue-500/50",
                                },
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <div className={`p-3 sm:p-4 text-white rounded-full border border-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md ${item.shadow}`}>
                                        {item.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/santanu.png"
                                alt="ASP.NET Core illustration"
                                width={600}
                                height={600}
                                className=" object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage;
