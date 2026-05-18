import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AIChat from "./components/AIChat";
import MoodLog from "./components/MoodLog/MoodLog";
import Insights from "./components/Insights";

function App() {
    return (
        <Router>

            <Navbar />

            <Routes>

                {/* HOME */}
                <Route path="/" element={<Home />} />

                {/* LOGIN */}
                <Route path="/login" element={<Login />} />

                {/* REGISTER */}
                <Route path="/register" element={<Register />} />

                <Route path="/chatbot" element={<AIChat />} />

                <Route path="/mood-log" element={<MoodLog />} />

                <Route path="/insights" element={<Insights />} />

            </Routes>

        </Router>
    );
}

export default App;