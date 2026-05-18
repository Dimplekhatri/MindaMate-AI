import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

import hifiRobot from "../../assets/hifi_robot.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [robotClicked, setRobotClicked] = useState(false);

  // HANDLE INPUT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        formData
      );

      if (response.data.success) {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020311] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03152b] via-[#020617] to-[#14001d]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

      {/* CYAN GLOW */}
      <div className="absolute top-[100px] left-[-250px] w-[850px] h-[850px] bg-cyan-500/20 blur-[200px] rounded-full" />

      {/* PURPLE GLOW */}
      <div className="absolute bottom-[-250px] right-[-200px] w-[750px] h-[750px] bg-fuchsia-600/20 blur-[180px] rounded-full" />

      {/* NAVBAR */}
      <nav className="relative z-30 flex items-center justify-between px-6 md:px-16 py-5 backdrop-blur-md border-b border-white/5">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-lg shadow-[0_0_35px_rgba(236,72,153,0.45)]">
            🧠
          </div>

          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
            MindaMate
          </h1>

        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10 text-white/90 font-medium">

          <Link to="/" className="hover:text-cyan-300 transition">
            Home
          </Link>

          <Link to="/chat" className="hover:text-cyan-300 transition">
            AI Chat
          </Link>

          <Link to="/mood" className="hover:text-cyan-300 transition">
            Mood Log
          </Link>

          <Link to="/history" className="hover:text-cyan-300 transition">
            History
          </Link>

        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">

          <button className="px-5 py-3 rounded-2xl bg-white/5 border border-cyan-400/20 hover:bg-white/10 transition hidden md:block">
            Login
          </button>

          <Link to="/register">
            <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_40px_rgba(217,70,239,0.45)]">
              Register
            </button>
          </Link>

        </div>

      </nav>

      {/* MAIN */}
      <div className="relative z-20 min-h-[88vh] flex items-center justify-between px-[2%]">

        {/* LEFT SIDE */}
        <div className="hidden lg:flex items-center justify-center w-[60%] relative overflow-hidden">

          <motion.div
            onClick={() => {
              setRobotClicked(true);

              setTimeout(() => {
                setRobotClicked(false);
              }, 2500);
            }}
            animate={{
              y: robotClicked
                ? [0, -60, 0, -35, 0]
                : [0, -18, 0],
              rotate: robotClicked
                ? [0, -3, 3, -2, 0]
                : 0,
            }}
            transition={{
              duration: robotClicked ? 1.2 : 5,
              repeat: robotClicked ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center cursor-pointer select-none"
          >

            {/* ROBOT IMAGE */}
            <img
              src={hifiRobot}
              alt="HiFi Robot"
              className="relative z-10 w-[1500px] object-contain drop-shadow-[0_0_200px_rgba(34,211,238,0.45)]"
            />

            {/* HIFI GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
              }}
              className="absolute top-[335px] left-[575px] w-24 h-24 rounded-full bg-cyan-300 blur-3xl"
            />

            {/* MESSAGE */}
            {robotClicked && (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.6 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    className="absolute top-[40px] z-30"
  >
    <div className="px-10 py-5 rounded-full 
    bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827]
    backdrop-blur-xl
    border border-pink-300/40
    shadow-[0_0_60px_rgba(34,211,238,0.25)]]">

       <h2
    className="text-4xl font-black tracking-wide
    bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400
    bg-clip-text text-transparent"
    style={{
      fontFamily: "'Poppins', sans-serif",
    }}
  >
    Hi My Cuties 💜💖
  </h2>

    </div>
  </motion.div>
)}

            {/* HEARTS */}
            {robotClicked && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-20, -120],
                    x: [-10, -50],
                  }}
                  transition={{ duration: 2 }}
                  className="absolute left-[260px] top-[260px] text-5xl"
                >
                  💖
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: [0, 1, 0],
                    y: [-20, -150],
                    x: [20, 60],
                  }}
                  transition={{ duration: 2.2 }}
                  className="absolute right-[250px] top-[220px] text-5xl"
                >
                  💜
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.4, 0.7],
                    y: [-10, -130],
                  }}
                  transition={{ duration: 2 }}
                  className="absolute top-[180px] text-6xl"
                >
                  💕
                </motion.div>
              </>
            )}

          </motion.div>

        </div>

        {/* LOGIN CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[540px] mr-[7%] -ml-[40px]"
        >

          {/* CARD GLOW */}
          <div className="absolute inset-0 rounded-[42px] bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-pink-500/30 blur-[30px]" />

          {/* CARD */}
          <div className="relative backdrop-blur-2xl bg-[#0a0f1d]/80 border border-cyan-400/30 rounded-[38px] px-8 md:px-10 py-10 shadow-[0_0_80px_rgba(34,211,238,0.18)] overflow-hidden">

            {/* INNER BORDER */}
            <div className="absolute inset-0 rounded-[38px] border border-cyan-300/10 pointer-events-none"></div>

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-2xl shadow-[0_0_35px_rgba(236,72,153,0.45)]">
                🧠
              </div>

              <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                MindaMate
              </h1>

            </div>

            {/* TITLE */}
            <h2 className="text-6xl font-black leading-[1.05] mb-3">
              Welcome
              <br />
              Back 👋
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Continue your wellness journey
            </p>

            {/* ERROR */}
            {error && (
              <div className="mb-5 bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-2xl">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/90 border border-cyan-400/30 hover:border-cyan-300/60 focus:border-cyan-400 outline-none text-white placeholder:text-cyan-100/60 shadow-[0_0_18px_rgba(34,211,238,0.08)] focus:shadow-[0_0_28px_rgba(34,211,238,0.28)] transition-all duration-300"
              />

              {/* PASSWORD */}
              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/90 border border-cyan-400/30 hover:border-cyan-300/60 focus:border-cyan-400 outline-none text-white placeholder:text-cyan-100/60 shadow-[0_0_18px_rgba(34,211,238,0.08)] focus:shadow-[0_0_28px_rgba(34,211,238,0.28)] transition-all duration-300"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-cyan-200 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

              {/* LOGIN BUTTON */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-4 mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-xl font-bold shadow-[0_0_90px_rgba(217,70,239,0.65)] hover:shadow-[0_0_120px_rgba(217,70,239,0.85)] transition-all duration-300"
              >
                {loading ? "Logging In..." : "Login"}
              </motion.button>

            </form>

            {/* REGISTER */}
            <p className="text-center text-gray-400 mt-7">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-cyan-300 hover:text-cyan-200 font-semibold transition"
              >
                Register
              </Link>

            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Login;