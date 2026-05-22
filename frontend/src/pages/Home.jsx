import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import robot from "../assets/robot.png";

const Home = () => {

    const [message, setMessage] =
        useState(false);

    const features = [

        {
            icon: "💬",
            title: "AI Chat",
            text: "Talk, share & feel better",
        },

        {
            icon: "😊",
            title: "Mood Tracking",
            text: "Track emotions daily",
        },

        {
            icon: "📈",
            title: "Insights",
            text: "Understand patterns",
        },

        {
            icon: "🪷",
            title: "Self Care",
            text: "Gentle wellness support",
        },
    ];

    return (

        <div className="relative min-h-screen overflow-hidden bg-[#020311] text-white">

            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#040b1f] via-[#020617] to-[#090014]" />

            <div className="absolute top-[-250px] left-[-200px] w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-cyan-500/10 blur-[220px] rounded-full"></div>

            <div className="absolute bottom-[-250px] right-[-150px] w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] bg-fuchsia-600/20 blur-[220px] rounded-full"></div>

            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:22px_22px]"></div>

            {/* MAIN */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* HERO */}
                <div className="grid lg:grid-cols-2 items-center min-h-screen pt-28 pb-12 gap-10">

                    {/* LEFT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 1
                        }}
                        className="text-center lg:text-left"
                    >

                        {/* BADGE */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-cyan-300 text-sm shadow-lg mb-6">

                            💜 Your AI Wellness Companion

                        </div>

                        {/* TITLE */}
                        <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] font-black leading-[0.95]">

                            Hey Human 👋

                        </h1>

                        <h2 className="mt-1 text-[42px] sm:text-[56px] lg:text-[72px] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

                            I’m Minda

                        </h2>

                        {/* DESC */}
                        <p className="mt-6 text-[16px] sm:text-[18px] text-gray-300 leading-relaxed max-w-[520px] mx-auto lg:mx-0">

                            I’m here to listen,
                            understand your emotions,
                            and help you feel better 💗

                        </p>

                        {/* BUTTONS */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                            <Link
                                to="/chatbot"
                            >

                                <motion.button
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    whileTap={{
                                        scale: 0.98
                                    }}
                                    className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-lg font-bold shadow-[0_0_70px_rgba(192,38,211,0.6)]"
                                >

                                    💬 Start Chatting

                                </motion.button>

                            </Link>

                            <Link
                                to="/mood-log"
                            >

                                <motion.button
                                    whileHover={{
                                        scale: 1.05
                                    }}
                                    whileTap={{
                                        scale: 0.98
                                    }}
                                    className="w-full sm:w-auto px-8 py-3 rounded-2xl border border-cyan-400 text-lg font-bold hover:bg-cyan-400 hover:text-black transition"
                                >

                                    😊 Track Mood

                                </motion.button>

                            </Link>

                        </div>

                        {/* CARDS */}
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">

                            {
                                features.map(
                                    (
                                        card,
                                        index
                                    ) => (

                                        <motion.div
                                            key={index}
                                            whileHover={{
                                                y: -5
                                            }}
                                            className="bg-[#0b1120]/85 border border-cyan-400/10 backdrop-blur-2xl rounded-[28px] p-4 shadow-[0_0_30px_rgba(168,85,247,0.12)]"
                                        >

                                            <div className="text-3xl mb-2">

                                                {card.icon}

                                            </div>

                                            <h3 className="font-bold">

                                                {card.title}

                                            </h3>

                                            <p className="text-gray-400 text-sm mt-2">

                                                {card.text}

                                            </p>

                                        </motion.div>
                                    )
                                )
                            }

                        </div>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className="relative flex justify-center items-center"
                    >

                        {/* GLOW */}
                        <div className="absolute w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-cyan-500/15 blur-[160px] rounded-full"></div>

                        {/* MESSAGE */}
                        {
                            message && (

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    className="absolute bottom-8 sm:bottom-14 z-50 bg-[#0b1120]/95 border border-cyan-400/30 px-6 py-5 rounded-[28px] backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.15)] max-w-[280px]"
                                >

                                    <h3 className="text-xl font-bold text-cyan-300 mb-3">

                                        Hey Human 💜

                                    </h3>

                                    <p className="text-gray-300 text-sm leading-relaxed">

                                        You are stronger than you think.
                                        Minda is always here 🌸

                                    </p>

                                </motion.div>
                            )
                        }

                        {/* ROBOT */}
                        <motion.img
                            src={robot}
                            alt="robot"
                            onClick={() =>
                                setMessage(
                                    !message
                                )
                            }
                            animate={{
                                y: [
                                    0,
                                    -14,
                                    0
                                ]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 5
                            }}
                            className="relative z-10 w-[320px] sm:w-[460px] lg:w-[700px] cursor-pointer drop-shadow-[0_0_120px_rgba(34,211,238,0.7)]"
                        />

                    </motion.div>

                </div>

                {/* STATS */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    className="pb-10"
                >

                    <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[34px] px-6 py-6 shadow-2xl">

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="text-center">
                                <div className="text-3xl">😊</div>
                                <h3 className="text-2xl font-black text-yellow-300">
                                    10K+
                                </h3>
                                <p className="text-gray-400">
                                    Happy Users
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl">💬</div>
                                <h3 className="text-2xl font-black text-cyan-300">
                                    50K+
                                </h3>
                                <p className="text-gray-400">
                                    Conversations
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl">🛡️</div>
                                <h3 className="text-2xl font-black text-cyan-300">
                                    100%
                                </h3>
                                <p className="text-gray-400">
                                    Private
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="text-3xl">💜</div>
                                <h3 className="text-2xl font-black text-pink-300">
                                    24/7
                                </h3>
                                <p className="text-gray-400">
                                    Always Here
                                </p>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

        </div>
    );
};

export default Home;