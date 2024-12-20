"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-teal-950 text-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-20">
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
                                <Link href="/">About Me</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/skills">Skills</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/goal">Goal</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/hobby">Hobby</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact">Contact</Link>
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

                    {/* Newsletter */}
                    <div className="w-fit">
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="mb-4">Sign up to receive the latest updates and news.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="p-2 rounded-l-lg text-gray-900 focus:outline-none"
                            />
                            <button type="submit" className="bg-teal-500 text-white p-2 rounded-r-lg hover:bg-teal-400">
                                Subscribe
                            </button>
                        </form>
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
