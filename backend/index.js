const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const connectWithDb = require('./config/db');

// ROUTES
const authRoutes = require('./routes/authRoutes');
const moodRoutes = require('./routes/moodRoutes');
const chatRoutes = require('./routes/chatRoutes');
const insightsRoutes = require('./routes/insightsRoutes');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

// =========================
// MIDDLEWARE
// =========================

app.use(
    cors({
        origin: "http://localhost:3000"
    })
);

app.use(bodyParser.json());

app.use(express.json());

// =========================
// DATABASE
// =========================

connectWithDb();

console.log("Database connection established.");

// =========================
// ROUTES
// =========================

// AUTH
app.use('/api/auth', authRoutes);

// MOOD LOGS
app.use('/api/mood', moodRoutes);

// AI CHAT
app.use('/api/chat', chatRoutes);

app.use('/api/insights', insightsRoutes);

// =========================
// HEALTH CHECK
// =========================

app.get('/', (req, res) => {

    res.send('MindaMate Backend Running 💜');

});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {

    console.log(
        `Server running on http://localhost:${PORT}`
    );

});