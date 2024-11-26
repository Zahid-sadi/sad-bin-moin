"use client";

import { motion } from "framer-motion";

const goals = [
    {
        title: "Expand IT Expertise",
        description:
            "Enhance my skills in cloud computing, cybersecurity, and advanced networking to stay ahead in the IT field.",
        size: "col-span-1", // Small size
    },
    {
        title: "Certifications",
        description:
            "Earn industry-recognized certifications like AWS Certified Solutions Architect and CompTIA Security+. ",
        size: "col-span-2", // Larger size
    },
    {
        title: "Mentorship",
        description: "Guide aspiring IT engineers by sharing knowledge and helping them grow in their careers.",
        size: "col-span-1", // Small size
    },
    {
        title: "Develop Personal Projects",
        description:
            "Work on innovative projects that solve real-world IT challenges and contribute to open-source communities.",
        size: "col-span-2", // Larger size
    },
    {
        title: "Leadership Roles",
        description:
            "Take on leadership roles in IT operations and project management, driving efficiency and innovation.",
        size: "col-span-1", // Small size
    },
];

const FutureGoalsSection = () => {
    return (
        <div id="future-goals" className="py-20 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold"
                >
                    Future Goals
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg mt-4"
                >
                    Here’s what I strive to achieve in the future.
                </motion.p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className={`relative bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transform transition-all ${goal.size}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg opacity-70"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-2xl font-semibold text-white">{goal.title}</h3>
                                <p className="text-lg mt-4 text-white">{goal.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FutureGoalsSection;
