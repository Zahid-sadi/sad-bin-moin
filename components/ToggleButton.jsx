"use client";

import { useEffect, useState } from "react";
import { CiCloudMoon, CiCloudSun } from "react-icons/ci";

export default function ToggleButton() {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            document.documentElement.classList.toggle("dark", newMode);
            return newMode;
        });
    };

    useEffect(() => {
        // Set dark mode based on user preference or system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDark);
        if (prefersDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={toggleDarkMode}
                className="p-3 h-12 w-12 rounded-full shadow-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center transition-all duration-300"
            >
                {isDarkMode ? (
                    <CiCloudSun className="text-yellow-500" size={32} />
                ) : (
                    <CiCloudMoon className="text-gray-600 dark:text-gray-300" size={32} />
                )}
            </button>
        </div>
    );
}
