import React from "react";

import { Link, useLocation } from "react-router-dom";

import { FaBrain } from "react-icons/fa";

const Navbar = () => {

    const location = useLocation();

    const navLinks = [

        {
            name: "Home",
            path: "/",
            color: "hover:text-purple-400"
        },

        {
            name: "AI Chat",
            path: "/chatbot",
            color: "hover:text-cyan-400"
        },

        {
            name: "Mood Log",
            path: "/mood-log",
            color: "hover:text-pink-400"
        },

        {
            name: "Insights",
            path: "/insights",
            color: "hover:text-yellow-400"
        }
    ];

    return (

        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0b1020]/80 border-b border-white/10">

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >

                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 transition duration-300">

                        <FaBrain className="text-white text-xl" />

                    </div>

                    <div>

                        <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                            MindaMate
                        </h1>

                        <p className="text-[10px] text-gray-400 tracking-widest uppercase">
                            AI Wellness Companion
                        </p>

                    </div>

                </Link>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-8">

                    {
                        navLinks.map((link) => {

                            const isActive =
                                location.pathname === link.path;

                            return (

                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative text-[16px] font-medium transition duration-300 ${link.color}
                                    
                                    ${isActive
                                            ? "text-white"
                                            : "text-gray-300"
                                        }`}
                                >

                                    {link.name}

                                    {/* ACTIVE LINE */}
                                    {
                                        isActive && (

                                            <span className="absolute left-0 -bottom-2 w-full h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
                                        )
                                    }

                                </Link>
                            );
                        })
                    }

                </div>

                {/* AUTH BUTTONS */}
                <div className="flex items-center gap-3">

                    <Link
                        to="/login"
                        className="px-5 py-2.5 rounded-2xl bg-white/10 border border-white/10 hover:bg-white/20 transition duration-300 text-white font-medium"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition duration-300 text-white font-semibold shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </nav>
    );
};

export default Navbar;