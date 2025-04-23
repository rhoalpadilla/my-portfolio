"use client";

import React from "react";

const Header = () => {
    const navItems = [
        { label: "About Me", target: "about" },
        { label: "Education", target: "education" },
        { label: "Experience", target: "experience" },
        { label: "Skills", target: "skills" },
        { label: "Contact", target: "contact" },
    ];

    return (
        <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur border-b border-gray-700">
                <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                        <h1 className="text-xl font-bold text-[#05fcec]">My Portfolio</h1>
                         <div className="flex gap-4 text-sm sm:text-base font-medium text-[#faf8f1]">
                                {navItems.map((item) => (
                                <a
                                 key={item.target}
                                        href={`#${item.target}`}
                                        className="hover:text-[#05fcec] transition-colors"
                                >
                                {item.label}
                         </a>
                        ))}
                 </div>
                </nav>
        </header>

    );
};

export default Header;
