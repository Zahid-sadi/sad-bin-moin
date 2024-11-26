"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To get the current path
import { FaEnvelope, FaHome, FaProjectDiagram, FaTools } from "react-icons/fa"; // Importing icons

const NavLink = () => {
    const pathname = usePathname(); // Get the current route

    const navLinks = [
        { href: "/", label: "Home", icon: FaHome, id: "" },
        { href: "/skills", label: "Skills", icon: FaTools, id: "skills" },
        { href: "/goal", label: "Goal", icon: FaProjectDiagram, id: "projects" },
        { href: "/hobby", label: "Hobby", icon: FaEnvelope, id: "contact" },
        { href: "/contact", label: "Contact", icon: FaEnvelope, id: "contact" },
    ];

    return (
        <div className="flex  gap-4 ">
            {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href; // Check if the link is active
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        id={link.id} // Assigning a unique id to each link
                        className={`flex items-center gap-2  text-lg font-medium transition-colors duration-300 ${
                            isActive ? "text-teal-400 " : "text-gray-300 hover:text-black"
                        }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </div>
    );
};

export default NavLink;
