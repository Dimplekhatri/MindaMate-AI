const mongoose = require('mongoose');

const moodLogSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    mood: {
        type: String,
        required: true,
    },

    userMessage: {
        type: String,
        required: true,
    },

    aiReply: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    }


});

module.exports = mongoose.model(
    'MoodLog',
    moodLogSchema
);
