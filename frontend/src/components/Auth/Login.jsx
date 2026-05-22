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

  const [showPassword, setShowPassword] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [robotClicked, setRobotClicked] =
    useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

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

        localStorage.setItem(
          "token",
          response.data.token
        );

        navigate("/");
      }

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="relative min-h-screen overflow-hidden bg-[#020311] text-white">

      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03152b] via-[#020617] to-[#14001d]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_0.8px,transparent_0.8px)] [background-size:24px_24px]" />

      {/* CYAN GLOW */}
      <div className="absolute top-[80px] left-[-180px] w-[420px] sm:w-[650px] lg:w-[850px] h-[420px] sm:h-[650px] lg:h-[850px] bg-cyan-500/20 blur-[180px] rounded-full" />

      {/* PURPLE GLOW */}
      <div className="absolute bottom-[-180px] right-[-150px] w-[420px] sm:w-[650px] lg:w-[750px] h-[420px] sm:h-[650px] lg:h-[750px] bg-fuchsia-600/20 blur-[180px] rounded-full" />

      {/* MAIN */}
      <div className="relative z-20 min-h-screen pt-24 px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

        {/* ROBOT */}
        <div className="
        hidden
        md:flex
        items-center
        justify-center
        w-full
        lg:w-[55%]
        relative
        overflow-visible
        ">

          <motion.div

            onClick={() => {

              setRobotClicked(true);

              setTimeout(() => {

                setRobotClicked(false);

              }, 2500);
            }}

            animate={{
              y: robotClicked
                ? [0, -50, 0, -25, 0]
                : [0, -16, 0],

              rotate: robotClicked
                ? [0, -2, 2, -1, 0]
                : 0,
            }}

            transition={{
              duration:
                robotClicked
                  ? 1.2
                  : 5,

              repeat:
                robotClicked
                  ? 0
                  : Infinity,

              ease: "easeInOut",
            }}

            className="relative cursor-pointer"
          >

            {/* ROBOT */}
            <img
              src={hifiRobot}
              alt="robot"
              className="
              relative z-10
              w-[420px]
              lg:w-[700px]
              xl:w-[850px]
              object-contain
              drop-shadow-[0_0_120px_rgba(34,211,238,0.45)]
              "
            />

            {/* GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
              }}
              className="
              absolute
              top-[42%]
              left-[50%]
              -translate-x-1/2
              w-20
              h-20
              rounded-full
              bg-cyan-300
              blur-3xl
              "
            />

            {/* MESSAGE */}
            {robotClicked && (

              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.6
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}

                className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
              >

                <div className="px-6 py-4 rounded-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#111827] backdrop-blur-xl border border-pink-300/40 shadow-[0_0_60px_rgba(34,211,238,0.25)]">

                  <h2 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">

                    Hi My Friends 💜💖

                  </h2>

                </div>

              </motion.div>
            )}

            {/* HEARTS */}
            {robotClicked && (

              <>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:[0,1,0],
                    y:[-20,-120],
                    x:[-10,-40]
                  }}
                  transition={{ duration: 2 }}
                  className="absolute left-[15%] top-[35%] text-5xl"
                >
                  💖
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:[0,1,0],
                    y:[-20,-140],
                    x:[10,50]
                  }}
                  transition={{ duration: 2.2 }}
                  className="absolute right-[15%] top-[30%] text-5xl"
                >
                  💜
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:[0,1,0],
                    y:[-10,-130],
                    scale:[0.5,1.4,0.7]
                  }}
                  transition={{ duration: 2 }}
                  className="absolute top-[18%] left-1/2 -translate-x-1/2 text-6xl"
                >
                  💕
                </motion.div>

              </>
            )}

          </motion.div>

        </div>

        {/* LOGIN CARD */}
        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:1
          }}

          className="relative w-full max-w-[540px]"
        >

          <div className="absolute inset-0 rounded-[42px] bg-gradient-to-r from-cyan-400/30 via-purple-500/20 to-pink-500/30 blur-[30px]" />

          <div className="relative backdrop-blur-2xl bg-[#0a0f1d]/80 border border-cyan-400/30 rounded-[38px] px-6 sm:px-8 md:px-10 py-8 sm:py-10 shadow-[0_0_80px_rgba(34,211,238,0.18)]">

            <div className="flex items-center gap-4 mb-6">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-2xl">
                🧠
              </div>

              <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                MindaMate
              </h1>

            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3">
              Welcome
              <br />
              Back 👋
            </h2>

            <p className="text-gray-400 mb-6">
              Continue your wellness journey
            </p>

            {error && (
              <div className="mb-4 bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-2xl">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/90 border border-cyan-400/30 outline-none text-white"
              />

              <div className="relative">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-[#09101f]/90 border border-cyan-400/30 outline-none text-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-300"
                >
                  {
                    showPassword
                      ? <FaEyeSlash />
                      : <FaEye />
                  }
                </button>

              </div>

              <motion.button
                whileHover={{
                  scale:1.03
                }}
                whileTap={{
                  scale:0.98
                }}
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 text-xl font-bold shadow-[0_0_90px_rgba(217,70,239,0.65)]"
              >
                {
                  loading
                    ? "Logging In..."
                    : "Login"
                }
              </motion.button>

            </form>

            <p className="text-center text-gray-400 mt-7">

              Don't have account?{" "}

              <Link
                to="/register"
                className="text-cyan-300 font-semibold"
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