"use client";

import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-teal-950 text-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact</h3>
                        <ul>
                            <li className="mb-2">Email: saad@gmail.com</li>
                            <li className="mb-2">Phone: (123) 456-7890</li>
                            <li className="mb-2">Address: c St, Dhaka, Bangladesh</li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="#about" className="hover:text-teal-400">
                                    About Me
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#services" className="hover:text-teal-400">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#projects" className="hover:text-teal-400">
                                    Projects
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#contact" className="hover:text-teal-400">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
                        <div className="flex space-x-6">
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-2xl hover:text-teal-400" />
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl hover:text-teal-400" />
                            </a>
                            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl hover:text-teal-400" />
                            </a>
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl hover:text-teal-400" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-12 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Saad Bin Moin. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
