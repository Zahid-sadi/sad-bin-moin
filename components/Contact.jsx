"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
    return (
        <div id="contact" className="py-20 bg-gray-100  md:py-44 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="space-x-6 mb-12">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.2 }}
                            className="inline-block p-3 bg-blue-500 rounded-full text-white hover:bg-blue-700"
                        >
                            <FaLinkedin size={28} />
                        </motion.div>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ scale: 1.2 }}
                            className="inline-block p-3 bg-gray-900 rounded-full text-white hover:bg-gray-700"
                        >
                            <FaGithub size={28} />
                        </motion.div>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.2 }}
                            className="inline-block p-3 bg-blue-400 rounded-full text-white hover:bg-blue-600"
                        >
                            <FaTwitter size={28} />
                        </motion.div>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            whileHover={{ scale: 1.2 }}
                            className="inline-block p-3 bg-pink-500 rounded-full text-white hover:bg-pink-700"
                        >
                            <FaInstagram size={28} />
                        </motion.div>
                    </a>
                </div>

                <div className="max-w-lg mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
                        Contact Form
                    </h3>
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-2 p-3 w-full border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="py-3 px-6 bg-black text-white rounded-lg hover:bg-yellow-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl mt-12 font-bold mb-4"
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg mb-10"
                >
                    I’d love to hear from you. Reach out to me through any of the platforms above or use the contact
                    form.
                </motion.p>
            </div>
        </div>
    );
};

export default ContactSection;
