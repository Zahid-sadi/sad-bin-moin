"use client";

import { motion } from "framer-motion";
import {
    FaBug, // IT Security Basics
    FaCloud, // Problem-Solving and Diagnostics Tools
    FaCogs, // Backup and Recovery
    FaDesktop, // VoIP and Telephony Systems
    FaDiagnoses, // Virtualization and Remote Access
    FaFileAlt, // Remote Support Tools
    FaHdd, // Command Line and Scripting
    FaHeadset, // Operating Systems
    FaNetworkWired, // Documentation and Ticketing Systems
    FaPhoneAlt, // Active Directory and User Management
    FaShieldAlt, // ITIL Framework Knowledge
    FaTasks, // Cloud Services
    FaTerminal,
    FaTools, // Software Troubleshooting
    FaUsersCog, // Hardware Troubleshooting
    FaWindows, // Operating Systems
} from "react-icons/fa";

const skills = [
    { name: "Hardware Troubleshooting", icon: <FaTools size={40} className="text-red-500" /> },
    { name: "Operating Systems", icon: <FaWindows size={40} className="text-blue-500" /> },
    { name: "Networking", icon: <FaNetworkWired size={40} className="text-green-500" /> },
    { name: "Software Troubleshooting", icon: <FaBug size={40} className="text-yellow-500" /> },
    { name: "Active Directory and User Management", icon: <FaUsersCog size={40} className="text-gray-700" /> },
    { name: "IT Security Basics", icon: <FaShieldAlt size={40} className="text-indigo-500" /> },
    { name: "Cloud Services", icon: <FaCloud size={40} className="text-blue-400" /> },
    { name: "Command Line and Scripting", icon: <FaTerminal size={40} className="text-gray-800" /> },
    { name: "Remote Support Tools", icon: <FaHeadset size={40} className="text-orange-500" /> },
    { name: "Backup and Recovery", icon: <FaHdd size={40} className="text-purple-500" /> },
    { name: "Virtualization and Remote Access", icon: <FaDesktop size={40} className="text-teal-500" /> },
    { name: "Documentation and Ticketing Systems", icon: <FaFileAlt size={40} className="text-gray-600" /> },
    { name: "VoIP and Telephony Systems", icon: <FaPhoneAlt size={40} className="text-blue-600" /> },
    { name: "Problem-Solving and Diagnostics Tools", icon: <FaDiagnoses size={40} className="text-red-600" /> },
    { name: "ITIL Framework Knowledge", icon: <FaCogs size={40} className="text-yellow-400" /> },
    { name: "Multi-tasking and Prioritization", icon: <FaTasks size={40} className="text-green-600" /> },
];

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-44 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">IT Support Engineer Skills</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg hover:scale-105 transform transition-transform"
                        >
                            <div className="mb-4">{skill.icon}</div>
                            <p className="text-lg font-medium text-gray-700 text-center">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
