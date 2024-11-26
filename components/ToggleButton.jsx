"use client";

import { useEffect, useState } from "react";

import { CiCloudMoon, CiCloudSun } from "react-icons/ci";


export default function ToggleButton() {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    // Toggle dark mode

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark", !isDarkMode);
    };

    useEffect(() => {
        // Set dark mode based on user preference or system preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <div className=" flex items-center justify-center ">
            <button onClick={toggleDarkMode} className=" p-2 h-12 w-auto rounded-full shadow-lg">
                {isDarkMode ? (
                    <CiCloudSun className="text-yellow-500" size="lg" />
                ) : (
                    <CiCloudMoon  className="text-gray-300" size="lg" />
                )}
            </button>
        </div>
    );
}
