"use client";
import proPic from "@/public/Images/saad.JPG";
import { motion } from "framer-motion";

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

    return (
        <div
            id="about"
            className="relative h-dvh w-full bg-cover bg-center bg-black bg-no-repeat p-6 opacity-90 md:p-12 text-gray-900 dark:text-gray-100 transition-all duration-500"
            style={{ backgroundImage: `url(${proPic.src})` }}
        >
            {/* Black overlay */}
            <div className="absolute inset-0   z-10"></div>

            <div className="flex max-w-7xl h-full mx-auto flex-col md:flex-row p-6 md:p-12 rounded-lg relative z-20">
                <div className="w-full md:w-1/2 text-left space-y-6">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={headingVariants}
                        className=" text-3xl md:text-5xl uppercase lg:text-9xl font-semibold md:font-black text-yellow-500 dark:text-teal-400"
                    >
                        Saad bin Moin <br />
                    </motion.h1>
                    <span className="text-yellow-700 ml-2 bg-black w-fit px-1 opacity-95 uppercase text-lg md:text-4xl font-medium md:font-semibold">
                        IT Engineer
                    </span>

                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={paragraphVariants}
                        className=" text-base md:text-2xl ml-2 leading-relaxed bg-black w-fit px-1 opacity-95 text-yellow-800 dark:text-gray-300"
                    >
                        Build something amazing together!
                    </motion.p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
