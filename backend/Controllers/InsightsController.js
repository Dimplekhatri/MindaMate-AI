const MoodLog = require('../models/moodLog');

exports.getInsights = async (req, res) => {

    try {

        const userId = req.user.id;

        const logs = await MoodLog.find({
            user: userId
        }).sort({ createdAt: 1 });

        if (!logs.length) {
            return res.status(200).json({
                success: true,
                insights: {
                    totalChats: 0,
                    topMood: "None",
                    wellnessScore: 0,
                    moodCounts: {},
                    trendMessage: "No emotional data yet 💜",
                    logs: []
                }
            });
        }

        // =========================
        // MOOD COUNTS
        // =========================

        const moodCounts = {};

        logs.forEach((log) => {

            const mood = log.mood;

            moodCounts[mood] =
                (moodCounts[mood] || 0) + 1;
        });

        // =========================
        // TOP MOOD
        // =========================

        let topMood = "neutral";

        let maxCount = 0;

        for (const mood in moodCounts) {

            if (moodCounts[mood] > maxCount) {

                maxCount = moodCounts[mood];

                topMood = mood;
            }
        }

        // =========================
        // WELLNESS SCORE
        // =========================

        const moodScores = {

            happy: 10,
            calm: 9,
            grateful: 9,
            hopeful: 8,
            content: 8,
            confident: 8,

            neutral: 5,

            tired: 3,
            bored: 3,

            stressed: -5,
            anxious: -6,
            overwhelmed: -7,
            sad: -7,
            lonely: -7,
            guilty: -5,
            embarrassed: -5,
            angry: -8,
            frustrated: -6,
            scared: -7
        };

        let totalScore = 0;

        logs.forEach((log) => {

            totalScore += moodScores[log.mood] || 0;
        });

        const normalizedScore = Math.max(
            0,
            Math.min(
                100,
                Math.round(
                    ((totalScore / logs.length) + 10) * 5
                )
            )
        );

        // =========================
        // TREND MESSAGE
        // =========================

        let trendMessage =
            "Your emotional journey is being tracked beautifully 💜";

        if (
            ['calm', 'happy', 'hopeful', 'content']
                .includes(topMood)
        ) {

            trendMessage =
                "You've been emotionally positive lately 🌿";
        }

        if (
            ['stressed', 'anxious', 'overwhelmed']
                .includes(topMood)
        ) {

            trendMessage =
                "You've been under emotional pressure recently. Take care of yourself 💜";
        }

        // =========================
        // RESPONSE
        // =========================

        return res.status(200).json({

            success: true,

            insights: {

                totalChats: logs.length,

                topMood,

                wellnessScore: normalizedScore,

                moodCounts,

                trendMessage,

                logs
            }
        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: "Failed to load insights",

            error: error.message
        });
    }
};