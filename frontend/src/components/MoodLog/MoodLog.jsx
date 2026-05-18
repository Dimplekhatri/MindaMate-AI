import React, { useEffect, useState } from "react";

import axios from "axios";

const moods = [

{ label: "happy", emoji: "😊" },
{ label: "sad", emoji: "😔" },
{ label: "neutral", emoji: "😐" },
{ label: "anxious", emoji: "😰" },
{ label: "excited", emoji: "🤩" },
{ label: "stressed", emoji: "😵" },
{ label: "angry", emoji: "😡" },
{ label: "frustrated", emoji: "😤" },
{ label: "overwhelmed", emoji: "🥺" },
{ label: "calm", emoji: "😌" },
{ label: "tired", emoji: "😴" },
{ label: "bored", emoji: "🥱" },
{ label: "confident", emoji: "😎" },
{ label: "scared", emoji: "😨" },
{ label: "grateful", emoji: "🙏" },
{ label: "lonely", emoji: "💔" },
{ label: "hopeful", emoji: "✨" },
{ label: "guilty", emoji: "😞" },
{ label: "embarrassed", emoji: "🙈" },
{ label: "content", emoji: "🌸" },


];

const MoodLog = () => {


const [logs, setLogs] = useState([]);

const [loading, setLoading] = useState(true);

const [errorMessage, setErrorMessage] = useState("");

// =========================
// FETCH AI CHAT LOGS
// =========================

const fetchMoodLogs = async () => {

    try {

        const token =
            localStorage.getItem("token");

        const response = await axios.get(

            "http://localhost:9000/api/mood/getmoodLog",

            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

        );

        setLogs(response.data.moodLogs);

    } catch (error) {

        console.log(error);

        setErrorMessage(
            "Failed to load emotional timeline"
        );

    }

    setLoading(false);
};

useEffect(() => {

    fetchMoodLogs();

}, []);

return (

    <div className="min-h-screen bg-[#050816] text-white px-6 py-24 overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-6xl mx-auto">

            {/* HEADER */}

            <div className="text-center mb-16">

                <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">

                    Emotional Timeline ✨

                </h1>

                <p className="text-white/50 text-xl mt-5">

                    Your conversations, emotions & healing journey 💜

                </p>

            </div>

            {/* LOADING */}

            {
                loading && (

                    <div className="text-center text-pink-300 text-2xl animate-pulse">

                        Loading your emotional memories...

                    </div>

                )
            }

            {/* ERROR */}

            {
                errorMessage && (

                    <div className="p-5 rounded-3xl bg-red-500/10 border border-red-400/20 text-red-300 text-center">

                        {errorMessage}

                    </div>

                )
            }

            {/* EMPTY */}

            {
                !loading && logs.length === 0 && (

                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-16 text-center backdrop-blur-2xl">

                        <div className="text-7xl mb-6">
                            💜
                        </div>

                        <h2 className="text-3xl font-bold mb-4">

                            No emotional memories yet

                        </h2>

                        <p className="text-white/50 text-lg">

                            Start chatting with MindaMate and your emotional timeline will appear here ✨

                        </p>

                    </div>

                )
            }

            {/* LOGS */}

            <div className="space-y-8">

                {
                    logs.map((log) => {

                        const moodData = moods.find(

                            (m) =>
                                m.label.toLowerCase() ===
                                log.mood?.toLowerCase()

                        );

                        return (

                            <div
                                key={log._id}
                                className="bg-white/5 border border-cyan-400/10 backdrop-blur-2xl rounded-[32px] p-8 shadow-[0_0_45px_rgba(34,211,238,0.08)] hover:border-pink-400/20 transition-all duration-300"
                            >

                                {/* TOP */}

                                <div className="flex items-center justify-between flex-wrap gap-4">

                                    <div className="flex items-center gap-5">

                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 flex items-center justify-center text-4xl">

                                            {
                                                moodData?.emoji || "💭"
                                            }

                                        </div>

                                        <div>

                                            <h2 className="text-3xl font-bold capitalize">

                                                {log.mood}

                                            </h2>

                                            <p className="text-white/40 text-sm mt-1">

                                                {
                                                    new Date(
                                                        log.createdAt
                                                    ).toLocaleString()
                                                }

                                            </p>

                                        </div>

                                    </div>

                                    <div className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-white/10 text-sm text-cyan-200">

                                        AI Emotional Analysis

                                    </div>

                                </div>

                                {/* USER MESSAGE */}

                                <div className="mt-8">

                                    <p className="text-cyan-300 text-sm mb-3 uppercase tracking-wider">

                                        You said

                                    </p>

                                    <div className="bg-cyan-500/10 border border-cyan-400/10 rounded-3xl p-6 text-lg leading-relaxed text-white/90">

                                        {log.userMessage}

                                    </div>

                                </div>

                                {/* AI RESPONSE */}

                                <div className="mt-6">

                                    <p className="text-pink-300 text-sm mb-3 uppercase tracking-wider">

                                        MindaMate replied

                                    </p>

                                    <div className="bg-pink-500/10 border border-pink-400/10 rounded-3xl p-6 text-lg leading-relaxed text-white/80">

                                        {log.aiReply}

                                    </div>

                                </div>

                            </div>

                        );

                    })
                }

            </div>

        </div>

    </div>

);


};

export default MoodLog;
