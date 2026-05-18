import React, {
    useEffect,
    useState
} from "react";

import axios from "axios";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

const COLORS = [
    "#22d3ee",
    "#ec4899",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#6366f1",
];

const moodEmoji = {

    happy: "😊",
    sad: "😔",
    anxious: "😰",
    stressed: "😵",
    angry: "😡",
    calm: "😌",
    overwhelmed: "🥺",
    hopeful: "✨",
    lonely: "💔",
    tired: "😴",
    content: "🌸"
};

const Insights = () => {

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchInsights();

    }, []);

    const fetchInsights = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:9000/api/insights",
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            setData(
                response.data.insights
            );

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);
        }
    };

    if (loading) {

        return (
            <div className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
                Loading Insights...
            </div>
        );
    }

    const pieData = Object.entries(
        data.moodCounts
    ).map(([mood, count]) => ({
        name: mood,
        value: count
    }));

    return (

        <div className="min-h-screen bg-[#050816] text-white px-6 pt-32 pb-16 relative overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px]" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 blur-[140px]" />

            {/* TITLE */}
            <div className="text-center mb-14 relative z-10">

                <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
                    AI Insights ✨
                </h1>

                <p className="text-gray-400 mt-4 text-xl">
                    Your emotional wellness analytics 💜
                </p>

            </div>

            {/* TOP STATS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 relative z-10">

                <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6">

                    <p className="text-gray-400 mb-2">
                        Wellness Score
                    </p>

                    <h2 className="text-5xl font-black text-cyan-300">
                        {data.wellnessScore}%
                    </h2>

                </div>

                <div className="rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-6">

                    <p className="text-gray-400 mb-2">
                        Most Common Mood
                    </p>

                    <h2 className="text-4xl font-bold">
                        {
                            moodEmoji[data.topMood]
                        } {data.topMood}
                    </h2>

                </div>

                <div className="rounded-3xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-6">

                    <p className="text-gray-400 mb-2">
                        Total AI Chats
                    </p>

                    <h2 className="text-5xl font-black text-purple-300">
                        {data.totalChats}
                    </h2>

                </div>

                <div className="rounded-3xl border border-green-500/20 bg-white/5 backdrop-blur-xl p-6">

                    <p className="text-gray-400 mb-2">
                        AI Emotional Insight
                    </p>

                    <p className="text-green-300 text-lg leading-relaxed">
                        {data.trendMessage}
                    </p>

                </div>

            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10">

                {/* PIE CHART */}
                <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Mood Distribution
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <PieChart>

                            <Pie
                                data={pieData}
                                dataKey="value"
                                outerRadius={120}
                                label
                            >

                                {
                                    pieData.map(
                                        (entry, index) => (

                                            <Cell
                                                key={index}
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

                {/* BAR CHART */}
                <div className="rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Emotional Activity
                    </h2>

                    <ResponsiveContainer
                        width="100%"
                        height={350}
                    >

                        <BarChart data={pieData}>

                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis dataKey="name" />

                            <YAxis />

                            <Tooltip />

                            <Bar
                                dataKey="value"
                                fill="#8b5cf6"
                                radius={[10, 10, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
};

export default Insights;