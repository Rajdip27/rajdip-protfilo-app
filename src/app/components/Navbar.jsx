"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaProjectDiagram, FaGraduationCap, FaCode, FaBriefcase } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";

const Navbar = () => {
    const pathname = usePathname(); // Get the current route

    const links = [
        { title: "Home", path: "/", icon: <FaHome /> },
        { title: "Skills", path: "/skills", icon: <FaCode /> },
        // { title: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
        { title: "Experience", path: "/experience", icon: <FaBriefcase  /> },
        { title: "Contact", path: "/contact", icon: <TbMailFilled /> },
    ];

    return (
        <div className="navbar absolute z-50 w-full">
            <div className="mx-auto relative z-10">
                <ul className="flex px-4 py-3 gap-6 justify-center">
                    {links.map((link) => (
                        <li key={link.path} className="group relative">
                            <Link
                                href={link.path}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition duration-300 ${pathname === link.path ? "text-white font-semibold" : "text-white/80 hover:text-white"
                                    }`}
                            >
                                {/* Icon */}
                                <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                                    {link.icon}
                                </span>

                                {/* Text */}
                                <span className="text-lg hidden lg:block">{link.title}</span>

                                {/* Underline Animation */}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ease-in-out ${pathname === link.path
                                        ? "w-full bg-white"
                                        : "w-0 group-hover:w-full bg-white"
                                        }`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
