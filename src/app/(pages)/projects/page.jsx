import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online store built with ASP.NET Core and Blazor.",
        details:
            "Developed a scalable e-commerce solution with product catalog, shopping cart, payment processing, and admin dashboard.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["ASP.NET Core", "Blazor", "EF Core", "SQL Server", "Azure"],
    },
    {
        title: "Real-time Chat Application",
        description: "A modern messaging platform using SignalR and ASP.NET Core.",
        details:
            "Built a real-time communication app with features like private messaging, group chats, file sharing, and message persistence.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["ASP.NET Core", "SignalR", "Blazor", "EF Core", "Azure"],
    },
    {
        title: "Microservices Architecture",
        description: "A distributed system built with ASP.NET Core microservices.",
        details:
            "Designed and implemented a scalable microservices architecture with API gateways, service discovery, and containerization.",
        image: "/placeholder.svg?height=400&width=600",
        technologies: ["ASP.NET Core", "Docker", "Kubernetes", "Azure", "gRPC"],
    },
];

const Page = () => {
    return (
        <section id="projects" className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
                        Featured Projects
                    </h2>
                    <p className="max-w-2xl text-gray-400 md:text-lg">
                        Showcasing my work with ASP.NET Core and related technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 mt-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="mt-5 flex-grow">
                                <h3 className="text-xl font-bold text-black">{project.title}</h3>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                                <p className="text-sm text-gray-600 mt-3">{project.details}</p>
                            </div>

                            {/* Technologies List */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-sm font-medium bg-violet-100 text-violet-800 rounded-lg transition duration-300 hover:bg-violet-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* View Project Button (Always at the Bottom) */}
                            <button
                                className="mt-6 w-full flex items-center justify-center gap-2 px-4 py-2 border border-violet-500 text-violet-600 rounded-lg font-medium transition duration-300 hover:bg-violet-500 hover:text-white"
                            >
                                View Project <FaArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Page;
