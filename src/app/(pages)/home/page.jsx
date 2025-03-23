import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Homepage = () => {
    return (
        <section className="relative w-full py-8 md:py-24 lg:py-28 xl:py-32 bg-black">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                ASP.NET Core Developer
                            </h1>
                            <p className="max-w-[600px] text-white md:text-xl">
                                Hello! I'm Santanu Chandra Shialy, a dedicated ASP.NET Developer with a passion for building robust and scalable web applications.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 min-[350px]:flex-row">
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
                        
                        <div className="flex justify-center lg:justify-start gap-6 mt-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group"
                            >
                                <div className="absolute -inset-2 rounded-lg group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative text-white p-3 rounded-lg border border-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-500/50">
                                    <FaGithub className="text-2xl" />
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group"
                            >
                                <div className="absolute -inset-2 rounded-lg group-hover:opacity-100 transition duration-300"></div>
                                <div className="relative text-white p-3 rounded-lg border border-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50">
                                    <FaLinkedinIn className="text-2xl" />
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            <Image
                                src="/Seth_Rollins.png"
                                alt="ASP.NET Core illustration"
                                width={600}
                                height={600}
                                className="rounded-lg object-cover"
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
