"use client";

import { motion } from "framer-motion";

const hobbies = [
    {
        name: "Cricket",
        image: "/images/ball.jpg", // Path to the cricket image
        description: "I enjoy playing cricket, honing my skills, and experiencing the thrill of the game.",
    },
    {
        name: "Pet Care",
        image: "/images/catmen.jpg", // Path to the pet image
        description: "Spending time with pets brings me joy and helps me connect with animals.",
    },
    {
        name: "Hiking",
        image: "/images/h.jpg", // Path to the hiking image
        description: "I love exploring nature and challenging myself with adventurous trails.",
    },
    {
        name: "Reading",
        image: "/images/pet.jpg", // Path to the reading image
        description: "Immersing myself in books is a way to gain knowledge and relax my mind.",
    },
    {
        name: "Photography",
        image: "/images/photo.jpg", // Path to the photography image
        description: "Capturing the beauty of moments and landscapes is my way of storytelling.",
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
                            {/* Hobby Image */}
                            <div className="h-48 w-full">
                                <img src={hobby.image} alt={hobby.name} className="object-cover w-full h-full" />
                            </div>

                            {/* Hobby Info */}
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
