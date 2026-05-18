const axios = require('axios');

const MoodLog = require('../models/moodLog');

exports.chatWithAI = async (req, res) => {

    try {

        const { message } = req.body;

        const userId = req.user.id;

        if (!message) {

            return res.status(400).json({

                success: false,

                message: "Message is required"

            });

        }

        // =========================
        // SEND MESSAGE TO FLASK AI
        // =========================

        const flaskResponse = await axios.post(

            'http://localhost:5001/predict',

            {
                input: message
            }

        );

        // =========================
        // AI RESPONSE
        // =========================

        const aiReply =
            flaskResponse.data.reply;

        // =========================
        // DETECTED MOOD
        // =========================

        const mood =
            flaskResponse.data.suggestions?.mood
            || "neutral";

        // =========================
        // SAVE CHAT TO DATABASE
        // =========================

        const newLog = await MoodLog.create({

            user: userId,

            mood,

            userMessage: message,

            aiReply

        });

        // =========================
        // FINAL RESPONSE
        // =========================

        return res.status(200).json({

            success: true,

            reply: aiReply,

            mood,

            data: newLog

        });

    } catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,

            message: "AI chat failed",

            error: error.message

        });

    }


};
