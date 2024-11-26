"use client";
import proPic from "@/public/Images/saad.JPG";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
    const headingVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: { scale: 1, rotate: 0, transition: { duration: 0.7 } },
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: 0.3, staggerChildren: 0.2 },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
    };

    return (
        <div
            id="about"
            className=" h-dvh w-full p-6 md:p-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-500"
        >
            <div className="flex max-w-7xl h-full mx-auto flex-col md:flex-row items-center justify-center p-6 md:p-12">
                <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                        className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-teal-400"
                    >
                        Saad bin moin <br />
                        <span className="text-yellow-700"> IT engineer</span>
                    </motion.h1>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={paragraphVariants}
                        className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300"
                    >
                        Build something amazing together!
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                    className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center"
                >
                    <Image
                        src={proPic}
                        alt="Hero Image"
                        width={500}
                        height={500}
                        className="bg-transparent shadow-lg  "
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
