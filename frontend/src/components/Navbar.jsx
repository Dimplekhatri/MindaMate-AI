import React, { useState } from "react";

import {
    Link,
    useLocation
} from "react-router-dom";

import {
    FaBrain,
    FaBars,
    FaTimes
} from "react-icons/fa";

const Navbar = () => {

    const location = useLocation();

    const [menuOpen, setMenuOpen] =
        useState(false);

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

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center relative z-10">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 transition duration-300">

                        <FaBrain className="text-white text-lg sm:text-xl" />

                    </div>

                    <div>

                        <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">

                            MindaMate

                        </h1>

                        <p className="hidden sm:block text-[10px] text-gray-400 tracking-widest uppercase">

                            AI Wellness Companion

                        </p>

                    </div>

                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center gap-8">

                    {
                        navLinks.map((link) => {

                            const isActive =
                                location.pathname ===
                                link.path;

                            return (

                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative text-[16px] font-medium transition duration-300 ${link.color}
                                    ${
                                        isActive
                                            ? "text-white"
                                            : "text-gray-300"
                                    }`}
                                >

                                    {link.name}

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

                {/* DESKTOP AUTH */}
                <div className="hidden md:flex items-center gap-3">

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

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() =>
                        setMenuOpen(
                            !menuOpen
                        )
                    }
                    className="md:hidden text-white text-2xl"
                >

                    {
                        menuOpen
                            ? <FaTimes />
                            : <FaBars />
                    }

                </button>

            </div>

            {/* MOBILE MENU */}
            {
                menuOpen && (

                    <div className="md:hidden bg-[#081120]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 flex flex-col gap-5 animate-fadeIn">

                        {
                            navLinks.map((link) => {

                                const isActive =
                                    location.pathname ===
                                    link.path;

                                return (

                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() =>
                                            setMenuOpen(
                                                false
                                            )
                                        }
                                        className={`text-lg font-medium transition duration-300
                                        ${
                                            isActive
                                                ? "text-cyan-300"
                                                : "text-gray-300"
                                        }`}
                                    >

                                        {link.name}

                                    </Link>
                                );
                            })
                        }

                        {/* MOBILE AUTH */}
                        <div className="flex flex-col gap-3 pt-4 border-t border-white/10">

                            <Link
                                to="/login"
                                onClick={() =>
                                    setMenuOpen(
                                        false
                                    )
                                }
                                className="w-full text-center px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-white"
                            >

                                Login

                            </Link>

                            <Link
                                to="/register"
                                onClick={() =>
                                    setMenuOpen(
                                        false
                                    )
                                }
                                className="w-full text-center px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold"
                            >

                                Register

                            </Link>

                        </div>

                    </div>
                )
            }

        </nav>
    );
};

export default Navbar;