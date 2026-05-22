import React, {
    useState,
    useRef,
    useEffect
} from "react";

import axios from "axios";

import robot from "../assets/cute_robot.png";

const AIChat = () => {

    const [message, setMessage] =
        useState("");

    const [chat, setChat] =
        useState([]);

    const [loading, setLoading] =
        useState(false);

    const chatEndRef =
        useRef(null);

    // =====================
    // AUTO SCROLL
    // =====================

    useEffect(() => {

        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [chat, loading]);

    // =====================
    // SEND MESSAGE
    // =====================

    const sendMessage =
        async () => {

            if (!message.trim())
                return;

            const token =
                localStorage.getItem(
                    "token"
                );

            const currentMessage =
                message;

            const userMessage = {

                sender: "user",

                text: currentMessage
            };

            setChat((prev) => [

                ...prev,

                userMessage
            ]);

            setMessage("");

            setLoading(true);

            try {

                const response =
                    await axios.post(

                        "http://localhost:9000/api/chat",

                        {
                            message:
                                currentMessage
                        },

                        {
                            headers: {
                                Authorization:
                                    `Bearer ${token}`
                            }
                        }
                    );

                const aiMessage = {

                    sender: "ai",

                    text: response
                        .data.reply
                };

                setChat((prev) => [

                    ...prev,

                    aiMessage
                ]);

            } catch (error) {

                console.log(error);

                let errorText =
                    "Server Error 😢";

                if (
                    error.response
                        ?.status === 401
                ) {

                    errorText =
                        "Please login first 💜";
                }

                setChat((prev) => [

                    ...prev,

                    {
                        sender: "ai",

                        text: errorText
                    }
                ]);
            }

            setLoading(false);
        };

    return (

        <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

            {/* GLOW */}
            <div className="absolute top-0 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cyan-500/20 blur-[160px]" />

            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-pink-500/20 blur-[160px]" />

            {/* MAIN */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-6">

                {/* HERO */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-6">

                    {/* LEFT */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">

                        {/* ROBOT */}
                        <div className="relative">

                            <div className="absolute inset-0 bg-cyan-400/25 blur-[80px] rounded-full" />

                            <img
                                src={robot}
                                alt="robot"
                                className="relative w-[120px] sm:w-[150px] lg:w-[180px] drop-shadow-[0_0_50px_rgba(34,211,238,0.7)] animate-pulse"
                            />

                            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-[#050816] animate-pulse" />

                        </div>

                        {/* TEXT */}
                        <div>

                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-400 bg-clip-text text-transparent">

                                Hey Friend 👋

                            </h1>

                            <p className="text-white/70 text-lg sm:text-xl mt-3 max-w-[500px]">

                                I’m
                                <span className="text-cyan-300 font-bold">
                                    {" "}MindaMate{" "}
                                </span>

                                — your emotional AI companion 💜

                            </p>

                            <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">

                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

                                <p className="text-green-300 text-sm sm:text-base">

                                    AI online & listening

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* ENERGY CARD */}
                    <div className="w-full lg:w-[380px] rounded-[30px] border border-pink-400/20 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 p-5 backdrop-blur-xl shadow-[0_0_45px_rgba(236,72,153,0.2)]">

                        <p className="text-white/60 text-sm mb-2">

                            Today’s Energy ✨

                        </p>

                        <h3 className="text-2xl sm:text-3xl font-bold text-pink-300">

                            Stay calm &
                            protect your peace 💜

                        </h3>

                    </div>

                </div>

                {/* QUICK BUTTONS */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-5">

                    {
                        [
                            {
                                emoji: "😔",
                                text: "I feel anxious lately"
                            },

                            {
                                emoji: "🚀",
                                text: "Motivate me"
                            },

                            {
                                emoji: "🧘",
                                text: "Calm my mind"
                            },

                            {
                                emoji: "💭",
                                text: "Positive thoughts"
                            }
                        ].map((btn, i) => (

                            <button
                                key={i}
                                onClick={() =>
                                    setMessage(
                                        btn.text
                                    )
                                }
                                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 hover:scale-105 transition text-sm sm:text-base"
                            >

                                {btn.emoji}{" "}
                                {btn.text}

                            </button>
                        ))
                    }

                </div>

                {/* CHAT BOX */}
                <div className="rounded-[34px] border border-cyan-500/20 bg-[#081120]/85 backdrop-blur-xl shadow-[0_0_70px_rgba(168,85,247,0.18)] overflow-hidden">

                    {/* CHAT AREA */}
                    <div className="h-[50vh] sm:h-[55vh] overflow-y-auto p-4 sm:p-6">

                        {
                            chat.length === 0 && (

                                <div className="flex flex-col items-center justify-center h-full text-center">

                                    <img
                                        src={robot}
                                        alt=""
                                        className="w-[70px] sm:w-[90px] animate-pulse"
                                    />

                                    <h2 className="text-2xl sm:text-4xl font-bold mt-4 bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">

                                        Your safe space 💜

                                    </h2>

                                    <p className="text-white/50 mt-2">

                                        Talk freely.
                                        I’m here.

                                    </p>

                                </div>
                            )
                        }

                        {
                            chat.map((msg, index) => (

                                <div
                                    key={index}
                                    className={`mb-4 flex ${
                                        msg.sender ===
                                        "user"
                                            ? "justify-end"
                                            : "justify-start"
                                    }`}
                                >

                                    <div
                                        className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 rounded-[26px] text-[15px] sm:text-lg leading-relaxed ${
                                            msg.sender ===
                                            "user"
                                                ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                                                : "bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-400/20"
                                        }`}
                                    >

                                        {msg.text}

                                    </div>

                                </div>
                            ))
                        }

                        {
                            loading && (

                                <div className="flex items-center gap-3 text-pink-400 animate-pulse">

                                    <img
                                        src={robot}
                                        alt=""
                                        className="w-7"
                                    />

                                    MindaMate typing...

                                </div>
                            )
                        }

                        <div ref={chatEndRef} />

                    </div>

                    {/* INPUT */}
                    <div className="border-t border-white/10 p-3 sm:p-4 bg-black/10">

                        <div className="flex flex-col sm:flex-row items-center gap-3">

                            <div className="flex-1 w-full flex items-center bg-white/5 border border-white/10 rounded-[24px] px-4 py-3">

                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) =>
                                        setMessage(
                                            e.target
                                                .value
                                        )
                                    }
                                    onKeyDown={(e) => {

                                        if (
                                            e.key ===
                                            "Enter"
                                        ) {

                                            sendMessage();
                                        }
                                    }}
                                    placeholder="Talk to MindaMate..."
                                    className="flex-1 bg-transparent text-white outline-none text-sm sm:text-lg"
                                />

                            </div>

                            <button
                                onClick={
                                    sendMessage
                                }
                                className="w-full sm:w-auto px-7 py-3 rounded-[20px] font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-pink-500 hover:scale-105 transition shadow-[0_0_35px_rgba(236,72,153,0.55)]"
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