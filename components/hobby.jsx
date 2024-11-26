"use client";

import Cricket from "@/public/Images/ball.jpg";
import cat from "@/public/Images/caat.jpg";
import Cycling from "@/public/Images/cycle.jpg";
import Hiking from "@/public/Images/h.jpg";
import Photography from "@/public/Images/photo.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

const hobbies = [
    {
        name: "Cricket",
        image: Cricket, // Correctly pass the imported image
        description: "I enjoy playing cricket, honing my skills, and experiencing the thrill of the game.",
    },
    {
        name: "Pet Care",
        image: cat, // Correctly pass the imported image
        description: "Spending time with pets brings me joy and helps me connect with animals.",
    },
    {
        name: "Hiking",
        image: Hiking, // Correctly pass the imported image
        description: "I love exploring nature and challenging myself with adventurous trails.",
    },
    {
        name: "Cycling",
        image: Cycling, // Correctly pass the imported image
        description: "Immersing myself in cycling is a way to gain refresh and relax my mind.",
    },
    {
        name: "Photography",
        image: Photography, // Correctly pass the imported image
        description: "Capturing the beauty of moments and landscapes is my way of storytelling.",
    },
];


const HobbySection = () => {
    return (
        <div id="hobbies" className="bg-gray-50 md:py-24 dark:bg-gray-800 py-12">
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
                          
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Hobby Image */}
                            <div className="h-48 w-full">
                                <Image src={hobby.image} width={400} height={400} alt={hobby.name} className="object-cover w-full h-full" />
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
