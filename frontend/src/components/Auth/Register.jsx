import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import flyingRobot from "../../assets/flying_robot.png";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      setLoading(true);
      setError("");

      const response = await axios.post(
        "http://localhost:9000/api/auth/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.success) {
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020311] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04152d] via-[#020617] to-[#17001f]" />

      {/* STARS */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:22px_22px]"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-[80px] left-[-200px] w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-260px] right-[-220px] w-[720px] h-[720px] bg-purple-600/10 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="relative z-30 flex items-center justify-between px-6 md:px-16 py-5 backdrop-blur-md">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-lg shadow-[0_0_35px_rgba(236,72,153,0.45)]">
            🧠
          </div>

          <h1 className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">
            MindaMate
          </h1>

        </div>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-10 text-white/90 font-medium">
          <a href="#" className="hover:text-cyan-300 transition">
            Home
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            AI Chat
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            Mood Log
          </a>

          <a href="#" className="hover:text-cyan-300 transition">
            History
          </a>
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-4">

          <button className="px-5 py-3 rounded-2xl bg-white/5 border border-cyan-400/20 hover:bg-white/10 transition hidden md:block">
            Login
          </button>

          <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 shadow-[0_0_40px_rgba(217,70,239,0.45)]">
            Register
          </button>

        </div>

      </nav>

      {/* ROBOT */}
      <motion.div
        animate={{
          y: [0, -6, 0],
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[120px] right-[-2%] z-10 hidden lg:block scale-[2.55]"
      >

        <motion.img
          src={flyingRobot}
          alt="Robot"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[980px] drop-shadow-[0_0_100px_rgba(34,211,238,0.28)] pointer-events-none select-none"
        />

      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex items-start justify-center min-h-screen px-6 md:px-[10%] pt-0 pb-10 -mt-2">

        {/* REGISTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[520px] mt-0 mr-[300px]"
        >

          {/* OUTER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 blur-[90px] rounded-[40px]"></div>

          {/* CARD */}
          <div className="relative backdrop-blur-2xl bg-white/5 border border-cyan-400/20 rounded-[38px] px-8 md:px-10 py-8 shadow-[0_0_60px_rgba(34,211,238,0.12)] overflow-hidden">

            {/* INNER LIGHT */}
            <div className="absolute top-[-60px] right-[-40px] w-[180px] h-[180px] bg-cyan-500/10 blur-[90px] rounded-full"></div>

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
            <h2 className="text-5xl md:text-6xl font-black leading-[1.05] mb-4">
              Create
              <br />
              Account ✨
            </h2>

            {/* SUBTEXT */}
            <p className="text-gray-400 text-lg mb-8">
              Your AI wellness companion is waiting 💖
            </p>

            {/* ERROR */}
            {error && (
              <div className="mb-5 bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-2xl">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* USERNAME */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/85 border border-cyan-400/25 hover:border-cyan-300/50 focus:border-cyan-400 outline-none text-white placeholder:text-cyan-100/60 shadow-[0_0_18px_rgba(34,211,238,0.06)] focus:shadow-[0_0_25px_rgba(34,211,238,0.22)] transition-all duration-300"
              />

              {/* EMAIL */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/85 border border-cyan-400/25 hover:border-cyan-300/50 focus:border-cyan-400 outline-none text-white placeholder:text-cyan-100/60 shadow-[0_0_18px_rgba(34,211,238,0.06)] focus:shadow-[0_0_25px_rgba(34,211,238,0.22)] transition-all duration-300"
              />

              {/* PASSWORD */}
              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/85 border border-cyan-400/25 hover:border-cyan-300/50 focus:border-cyan-400 outline-none text-white placeholder:text-cyan-100/60 shadow-[0_0_18px_rgba(34,211,238,0.06)] focus:shadow-[0_0_25px_rgba(34,211,238,0.22)] transition-all duration-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-cyan-200 transition"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/85 border border-cyan-400/25 hover:border-cyan-300/50 focus:border-cyan-400 outline-none text-white placeholder:text-cyan-100/60 shadow-[0_0_18px_rgba(34,211,238,0.06)] focus:shadow-[0_0_25px_rgba(34,211,238,0.22)] transition-all duration-300"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-300 hover:text-cyan-200 transition"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                disabled={loading}
                className="w-full py-4 mt-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-xl font-bold shadow-[0_0_90px_rgba(217,70,239,0.65)] hover:shadow-[0_0_120px_rgba(217,70,239,0.85)] transition-all duration-300"
              >
                {loading
                  ? "Creating Account..."
                  : "Register"}
              </motion.button>

            </form>

            {/* LOGIN */}
            <p className="text-center text-gray-400 mt-7">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-cyan-300 hover:text-cyan-200 font-semibold transition"
              >
                Login
              </Link>

            </p>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Register;