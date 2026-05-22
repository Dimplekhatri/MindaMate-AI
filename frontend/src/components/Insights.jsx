import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {

    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis

} from "recharts";

const Insights = () => {

    const [insights, setInsights] =
        useState(null);

    const [loading, setLoading] =
        useState(true);

    const COLORS = [

        "#22d3ee",
        "#a855f7",
        "#ec4899",
        "#38bdf8",
        "#facc15"
    ];

    // ===================
    // FETCH INSIGHTS
    // ===================

    useEffect(() => {

        const fetchInsights =
            async () => {

                try {

                    const token =
                        localStorage.getItem(
                            "token"
                        );

                    const response =
                        await axios.get(

                            "http://localhost:9000/api/insights",

                            {
                                headers: {
                                    Authorization:
                                        `Bearer ${token}`
                                }
                            }
                        );

                    setInsights(
                        response.data
                    );

                } catch (error) {

                    console.log(
                        error
                    );

                }

                setLoading(
                    false
                );
            };

        fetchInsights();

    }, []);

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center text-white text-2xl">

                Loading Insights...

            </div>
        );
    }

    if (!insights) {

        return (

            <div className="min-h-screen flex items-center justify-center text-red-400 text-xl">

                Failed to load insights

            </div>
        );
    }

    const moodData =
        insights.moodCounts?.map(
            (item) => ({

                name:
                    item._id,

                value:
                    item.count
            })
        ) || [];

    return (

        <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">

            {/* BG GLOW */}
            <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/15 blur-[160px]" />

            <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-500/15 blur-[160px]" />

            {/* MAIN */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-10">

                {/* TITLE */}
                <div className="text-center mb-10">

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">

                        AI Insights 📊

                    </h1>

                    <p className="text-white/60 mt-3 text-sm sm:text-lg">

                        Your emotional wellness dashboard

                    </p>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

                    {/* TOTAL */}
                    <div className="rounded-[30px] bg-white/5 border border-cyan-400/10 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(34,211,238,0.12)]">

                        <p className="text-white/60">

                            Total Chats

                        </p>

                        <h2 className="text-4xl font-black text-cyan-300 mt-2">

                            {
                                insights.totalChats
                            }

                        </h2>

                    </div>

                    {/* MOOD */}
                    <div className="rounded-[30px] bg-white/5 border border-pink-400/10 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(236,72,153,0.12)]">

                        <p className="text-white/60">

                            Top Mood

                        </p>

                        <h2 className="text-3xl font-black text-pink-300 mt-2">

                            {
                                insights.topMood ||
                                "—"
                            }

                        </h2>

                    </div>

                    {/* WELLNESS */}
                    <div className="rounded-[30px] bg-white/5 border border-purple-400/10 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.12)]">

                        <p className="text-white/60">

                            Wellness Score

                        </p>

                        <h2 className="text-4xl font-black text-purple-300 mt-2">

                            {
                                insights.wellnessScore
                            }%

                        </h2>

                    </div>

                </div>

                {/* CHARTS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* PIE */}
                    <div className="rounded-[34px] bg-[#081120]/90 border border-cyan-400/10 p-5 sm:p-6 backdrop-blur-xl">

                        <h2 className="text-2xl font-bold mb-5 text-cyan-300">

                            Mood Distribution

                        </h2>

                        <div className="w-full h-[320px] sm:h-[380px]">

                            <ResponsiveContainer>

                                <PieChart>

                                    <Pie
                                        data={
                                            moodData
                                        }
                                        dataKey="value"
                                        outerRadius={
                                            120
                                        }
                                        label
                                    >

                                        {
                                            moodData.map(
                                                (
                                                    entry,
                                                    index
                                                ) => (

                                                    <Cell
                                                        key={
                                                            index
                                                        }
                                                        fill={
                                                            COLORS[
                                                                index %
                                                                COLORS.length
                                                            ]
                                                        }
                                                    />
                                                )
                                            )
                                        }

                                    </Pie>

                                    <Tooltip />

                                </PieChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                    {/* BAR */}
                    <div className="rounded-[34px] bg-[#081120]/90 border border-pink-400/10 p-5 sm:p-6 backdrop-blur-xl">

                        <h2 className="text-2xl font-bold mb-5 text-pink-300">

                            Mood Activity

                        </h2>

                        <div className="w-full h-[320px] sm:h-[380px]">

                            <ResponsiveContainer>

                                <BarChart
                                    data={
                                        moodData
                                    }
                                >

                                    <XAxis
                                        dataKey="name"
                                        stroke="#ccc"
                                    />

                                    <YAxis
                                        stroke="#ccc"
                                    />

                                    <Tooltip />

                                    <Bar
                                        dataKey="value"
                                        radius={[
                                            12,
                                            12,
                                            0,
                                            0
                                        ]}
                                        fill="#a855f7"
                                    />

                                </BarChart>

                            </ResponsiveContainer>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Insights;