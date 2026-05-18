import React, { useState } from "react";
import axios from "axios";

import robot from "../assets/cute_robot.png";

import "./Chatbot.css";

const AIChat = () => {

    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    // =========================
    // SEND MESSAGE
    // =========================

    const sendMessage = async () => {

        if (!message.trim()) return;

        const token = localStorage.getItem("token");

        // USER MESSAGE
        const currentMessage = message;

        const userMessage = {
            sender: "user",
            text: currentMessage
        };

        // ADD USER CHAT
        setChat((prev) => [...prev, userMessage]);

        // CLEAR INPUT
        setMessage("");

        // START LOADING
        setLoading(true);

        try {

            // =========================
            // SEND TO NODE BACKEND
            // =========================

            const response = await axios.post(

                "http://localhost:9000/api/chat",

                {
                    message: currentMessage
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            // =========================
            // AI MESSAGE
            // =========================

            const aiMessage = {
                sender: "ai",
                text: response.data.reply
            };

            setChat((prev) => [...prev, aiMessage]);

        } catch (error) {

            console.log(error);

            let errorText = "Server Error 😢";

            if (error.response?.status === 401) {

                errorText = "Please login first 💜";

            } else if (error.response?.data?.message) {

                errorText = error.response.data.message;

            }

            setChat((prev) => [

                ...prev,

                {
                    sender: "ai",
                    text: errorText
                }

            ]);
        }

        // STOP LOADING
        setLoading(false);
    };

    return (

        <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

            {/* BACKGROUND GLOWS */}
            <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[160px]" />

            <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-pink-500/20 blur-[160px]" />

            {/* MAIN */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-4">

                {/* HERO SECTION */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-5">

                    {/* LEFT */}
                    <div className="flex items-center gap-6">

                        {/* ROBOT */}
                        <div className="relative">

                            {/* GLOW */}
                            <div className="absolute inset-0 bg-cyan-400/25 blur-[90px] rounded-full" />

                            <img
                                src={robot}
                                alt="robot"
                                className="relative w-[150px] floatingRobot drop-shadow-[0_0_50px_rgba(34,211,238,0.8)]"
                            />

                            {/* ONLINE DOT */}
                            <div className="absolute bottom-4 right-4 w-5 h-5 bg-green-400 rounded-full border-4 border-[#050816] animate-pulse" />

                        </div>

                        {/* TEXT */}
                        <div>

                            <h1 className="text-5xl lg:text-6xl font-black leading-none bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-400 bg-clip-text text-transparent">
                                Hey Cutie 👋
                            </h1>

                            <p className="text-white/75 text-[24px] mt-4 leading-relaxed max-w-[700px]">

                                I’m

                                <span className="text-cyan-300 font-bold">
                                    {" "}MindaMate{" "}
                                </span>

                                — your emotional AI companion 💜

                            </p>

                            {/* STATUS */}
                            <div className="flex items-center gap-3 mt-5">

                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

                                <p className="text-green-300 font-medium text-lg">
                                    AI is online & listening...
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT CARD */}
                    <div className="w-[420px] rounded-[30px] border border-pink-400/20 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 p-6 backdrop-blur-xl shadow-[0_0_45px_rgba(236,72,153,0.2)]">

                        <p className="text-white/60 text-sm mb-3">
                            Today’s Energy ✨
                        </p>

                        <h3 className="text-4xl font-bold leading-snug text-pink-300">
                            Stay calm & protect your peace 💜
                        </h3>

                        {/* PROGRESS */}
                        <div className="mt-5">

                            <div className="flex justify-between mb-2 text-sm text-white/60">

                                <span>
                                    Positive vibes loading...
                                </span>

                                <span>
                                    87%
                                </span>

                            </div>

                            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                                <div className="w-[87%] h-full bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full" />

                            </div>

                        </div>

                    </div>

                </div>

                {/* QUICK BUTTONS */}
                <div className="flex flex-wrap gap-4 mb-6">

                    <button
                        onClick={() => setMessage("I feel anxious lately")}
                        className="px-6 py-3 rounded-full bg-cyan-500/15 border border-cyan-400/20 hover:scale-105 hover:bg-cyan-500/25 transition-all duration-300"
                    >
                        😔 I feel anxious
                    </button>

                    <button
                        onClick={() => setMessage("Motivate me")}
                        className="px-6 py-3 rounded-full bg-pink-500/15 border border-pink-400/20 hover:scale-105 hover:bg-pink-500/25 transition-all duration-300"
                    >
                        🚀 Motivate me
                    </button>

                    <button
                        onClick={() => setMessage("Calm my mind")}
                        className="px-6 py-3 rounded-full bg-purple-500/15 border border-purple-400/20 hover:scale-105 hover:bg-purple-500/25 transition-all duration-300"
                    >
                        🧘 Calm my mind
                    </button>

                    <button
                        onClick={() => setMessage("Give me positive thoughts")}
                        className="px-6 py-3 rounded-full bg-blue-500/15 border border-blue-400/20 hover:scale-105 hover:bg-blue-500/25 transition-all duration-300"
                    >
                        💭 Positive thoughts
                    </button>

                </div>

                {/* CHAT CONTAINER */}
                <div className="rounded-[38px] border border-cyan-500/20 bg-[#081120]/85 backdrop-blur-xl shadow-[0_0_70px_rgba(168,85,247,0.18)] overflow-hidden">

                    {/* CHAT AREA */}
                    <div className="h-[40vh] overflow-y-auto p-7">

                        {/* EMPTY STATE */}
                        {
                            chat.length === 0 && (

                                <div className="flex flex-col items-center justify-center h-full opacity-90">

                                    <img
                                        src={robot}
                                        alt=""
                                        className="w-[75px] floatingRobot"
                                    />

                                    <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">

                                        Your safe space starts here 💜

                                    </h2>

                                    <p className="text-white/50 text-lg mt-3">

                                        Talk freely. I’m here for you.

                                    </p>

                                    <div className="w-[130px] h-[4px] mt-5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.5)]" />

                                </div>
                            )
                        }

                        {/* CHAT MESSAGES */}
                        {
                            chat.map((msg, index) => (

                                <div
                                    key={index}
                                    className={`mb-5 flex ${
                                        msg.sender === "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >

                                    <div
                                        className={`max-w-[75%] px-5 py-4 rounded-[28px] text-lg leading-relaxed ${
                                            msg.sender === "user"
                                                ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                                                : "bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20"
                                        }`}
                                    >

                                        <p>{msg.text}</p>

                                    </div>

                                </div>
                            ))
                        }

                        {/* LOADING */}
                        {
                            loading && (

                                <div className="flex items-center gap-3 text-pink-400 animate-pulse mt-4">

                                    <img
                                        src={robot}
                                        alt=""
                                        className="w-8"
                                    />

                                    <p>
                                        MindaMate is typing...
                                    </p>

                                </div>
                            )
                        }

                    </div>

                    {/* INPUT AREA */}
                    <div className="border-t border-white/10 p-4 bg-black/10 backdrop-blur-xl">

                        <div className="flex items-center gap-4">

                            {/* MAGIC BUTTON */}
                            <button className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 text-2xl hover:scale-110 transition-all">

                                ✨

                            </button>

                            {/* INPUT */}
                            <div className="flex-1 flex items-center bg-white/5 border border-white/10 rounded-[24px] px-5 py-3 backdrop-blur-xl">

                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            sendMessage();
                                        }
                                    }}
                                    placeholder="Talk to MindaMate..."
                                    className="flex-1 bg-transparent text-lg text-white outline-none"
                                />

                                {/* MIC */}
                                <button className="w-[52px] h-[52px] rounded-full bg-white/5 border border-white/10 text-xl hover:bg-pink-500/20 transition-all">

                                    🎤

                                </button>

                            </div>

                            {/* SEND */}
                            <button
                                onClick={sendMessage}
                                className="px-10 py-4 rounded-[22px] font-bold text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(236,72,153,0.55)]"
                            >

                                Send 🚀

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default AIChat;

