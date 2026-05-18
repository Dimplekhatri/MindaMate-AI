const MoodLog = require('../models/moodLog');

exports.getMoodLogs = async (req, res) => {

    try {

        const moodLogs = await MoodLog.find({

            user: req.user.id

        }).sort({

            createdAt: -1

        });

        return res.status(200).json({

            success: true,

            moodLogs

        });

    } catch (error) {

        return res.status(500).json({

            success: false,

            message: "Failed to retrieve mood logs",

            error: error.message

        });

    }


};
