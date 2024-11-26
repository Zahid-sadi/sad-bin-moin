"use client";

import { motion } from "framer-motion";
import { FaBook, FaCamera, FaHiking, FaPaintBrush } from "react-icons/fa";
import { TbCricket } from "react-icons/tb";
const hobbies = [
    {
        name: "Cricket",
        icon: <TbCricket className="text-red-500" size={40} />,
        description: "I enjoy playing cricket, staying active, and being part of a team sport.",
    },
    {
        name: "Painting",
        icon: <FaPaintBrush className="text-pink-500" size={40} />,
        description: "I love to create art and explore my imagination through colors.",
    },
    {
        name: "Hiking",
        icon: <FaHiking className="text-green-500" size={40} />,
        description: "Being amidst nature and climbing trails rejuvenates me.",
    },
    {
        name: "Reading",
        icon: <FaBook className="text-blue-500" size={40} />,
        description: "I enjoy reading books on technology, fiction, and self-growth.",
    },
    {
        name: "Photography",
        icon: <FaCamera className="text-purple-500" size={40} />,
        description: "Capturing moments with my camera is a hobby I cherish.",
    },
];

const HobbySection = () => {
    return (
        <div id="hobbies" className="bg-gray-50 dark:bg-gray-800 py-12">
            <div className="max-w-7xl mx-auto text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-gray-800 dark:text-gray-100"
                >
                    My Hobbies
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-300 mt-4"
                >
                    Here are some of my favorite ways to unwind and enjoy life.
                </motion.p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            initial={{ rotateY: 180 }}
                            animate={{ rotateY: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="h-48 flex items-center justify-center text-gray-800 dark:text-gray-100">
                                {hobby.icon}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{hobby.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2">{hobby.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HobbySection;
