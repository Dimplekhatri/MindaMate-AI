import React, { useState } from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot.png";

const Home = () => {
  const [message, setMessage] = useState(false);

  const features = [
    {
      icon: "💬",
      title: "AI Chat",
      text: "Talk, share & feel better",
    },
    {
      icon: "😊",
      title: "Mood Tracking",
      text: "Track your feelings every day",
    },
    {
      icon: "📈",
      title: "Insights",
      text: "Understand your emotional patterns",
    },
    {
      icon: "🪷",
      title: "Self Care",
      text: "Guided exercises for a better mind",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020311] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#040b1f] via-[#020617] to-[#090014]" />

      {/* EXTRA NAVY GLOW */}
      <div className="absolute top-[-250px] left-[-150px] w-[700px] h-[700px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-100px] w-[600px] h-[600px] bg-fuchsia-500/10 blur-[180px] rounded-full"></div>

      {/* LEFT GLOW */}
      <div className="absolute top-[-250px] left-[-200px] w-[700px] h-[700px] bg-cyan-500/10 blur-[220px] rounded-full"></div>

      {/* RIGHT PURPLE GLOW */}
      <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-fuchsia-600/20 blur-[220px] rounded-full"></div>

      {/* STAR NOISE */}
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(#ffffff_0.7px,transparent_0.7px)] [background-size:22px_22px]"></div>

      {/* STARS */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[12%] left-[18%] w-[2px] h-[2px] bg-cyan-300 rounded-full animate-pulse"></div>

        <div className="absolute top-[20%] left-[40%] w-[2px] h-[2px] bg-purple-400 rounded-full animate-pulse"></div>

        <div className="absolute top-[32%] left-[75%] w-[3px] h-[3px] bg-pink-400 rounded-full blur-sm animate-pulse"></div>

        <div className="absolute top-[14%] right-[18%] w-[2px] h-[2px] bg-cyan-400 rounded-full animate-pulse"></div>

        <div className="absolute bottom-[22%] left-[10%] w-[3px] h-[3px] bg-fuchsia-400 rounded-full blur-sm animate-pulse"></div>

        <div className="absolute bottom-[30%] right-[10%] w-[3px] h-[3px] bg-purple-400 rounded-full blur-sm animate-pulse"></div>

        <div className="absolute top-[55%] right-[35%] w-[2px] h-[2px] bg-cyan-300 rounded-full animate-pulse"></div>

      </div>

      {/* MAIN */}
      <div className="relative z-10 max-w-[1450px] mx-auto pl-6 pr-12 xl:pl-10 xl:pr-20">

        {/* HERO */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-center min-h-[88vh] pt-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 max-w-[620px] -mt-6"
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl text-cyan-300 text-sm shadow-lg mb-7">

              💜 Your AI Wellness Companion

            </div>

            {/* HEADING */}
            <h1 className="text-[64px] xl:text-[78px] leading-[0.92] font-black tracking-tight text-white">

              Hey Human 👋

            </h1>

            <h2 className="mt-1 text-[64px] xl:text-[78px] leading-[0.92] font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">

              I’m Minda

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-[18px] text-gray-300 leading-relaxed max-w-[520px]">

              I’m here to listen, understand your emotions,
              and help you feel better every day 💗

            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex items-center gap-5">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-9 py-3.5 rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-lg font-bold shadow-[0_0_70px_rgba(192,38,211,0.6)]"
              >

                💬 Start Chatting

              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-3.5 rounded-2xl border border-cyan-400 text-lg font-bold hover:bg-cyan-400 hover:text-black transition"
              >

                😊 Track Your Mood

              </motion.button>

            </div>

            {/* FEATURE CARDS */}
            <div className="mt-7 flex gap-3">

              {features.map((card, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="w-[155px] h-[165px] flex-shrink-0 bg-[#0b1120]/85 border border-cyan-400/10 backdrop-blur-2xl rounded-[30px] p-5 shadow-[0_0_30px_rgba(168,85,247,0.12)] hover:border-fuchsia-400/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300"
                >

                  <div className="text-4xl mb-3">
                    {card.icon}
                  </div>

                  <h3 className="text-[16px] font-bold leading-tight mb-2">
                    {card.title}
                  </h3>

                  <p className="text-gray-400 text-[13px] leading-relaxed">
                    {card.text}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-end items-center h-full -mt-8 pr-6"
          >

            {/* MAIN GLOW */}
            <div className="absolute w-[800px] h-[800px] bg-cyan-500/15 blur-[180px] rounded-full"></div>

            {/* SWIRL */}
            <div className="absolute bottom-8 right-16 w-[500px] h-[180px] border-[8px] border-purple-500/15 rounded-full blur-md rotate-[-8deg]"></div>

            <div className="absolute bottom-0 right-8 w-[500px] h-[140px] border-[7px] border-cyan-400/15 rounded-full blur-md rotate-[8deg]"></div>

            {/* FLOOR GLOW */}
            <div className="absolute bottom-[-20px] right-[140px] w-[320px] h-[80px] bg-cyan-400/20 blur-[80px] rounded-full"></div>

            {/* HEART */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-20 left-16 bg-[#111827]/80 border border-cyan-400/30 backdrop-blur-xl px-5 py-4 rounded-3xl shadow-2xl z-20"
            >

              <div className="text-4xl">
                💗
              </div>

            </motion.div>

            {/* CLICK BOX */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-28 right-0 bg-[#111827]/80 border border-purple-400/30 backdrop-blur-xl px-5 py-4 rounded-3xl shadow-2xl z-20"
            >

              <p className="text-pink-300 font-bold text-xl">
                Click me!
              </p>

              <p className="text-gray-300 text-sm mt-2 leading-relaxed">

                I have a special
                <br />
                message for you 💜

              </p>

            </motion.div>

            {/* MESSAGE POPUP */}
            {message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-10 right-16 z-50 bg-[#0b1120]/95 border border-cyan-400/30 px-8 py-6 rounded-[28px] backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,0.15)] max-w-[320px]"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-3">
                  Hey Human 💜
                </h3>

                <p className="text-gray-300 leading-relaxed text-[15px]">
                  You are stronger than you think.
                  Minda is always here to support,
                  guide and listen to you whenever
                  you need 🌸
                </p>
              </motion.div>
            )}

            {/* ROBOT */}
            <motion.img
              src={robot}
              alt="robot"
              onClick={() => setMessage(!message)}
              animate={{
                y: [0, -16, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="relative z-10 w-[760px] xl:w-[860px] max-w-none cursor-pointer drop-shadow-[0_0_140px_rgba(34,211,238,0.75)]"
            />

          </motion.div>

        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative -mt-16 pb-4"
        >

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[38px] px-8 py-5 shadow-2xl overflow-hidden">

          {/* ANGLED EDGES */}
         <div className="absolute top-0 left-0 w-24 h-24 border-t border-l border-cyan-400/20 skew-x-[-40deg] -translate-x-10"></div>

         <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r border-fuchsia-400/20 skew-x-[-40deg] translate-x-10"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="text-center">
                <div className="text-4xl mb-1">😊</div>
                <h3 className="text-3xl font-black text-yellow-300">10K+</h3>
                <p className="text-gray-400 mt-1">Happy Users</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-1">💬</div>
                <h3 className="text-3xl font-black text-cyan-300">50K+</h3>
                <p className="text-gray-400 mt-1">Conversations</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-1">🛡️</div>
                <h3 className="text-3xl font-black text-cyan-300">100%</h3>
                <p className="text-gray-400 mt-1">Private & Secure</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-1">💜</div>
                <h3 className="text-3xl font-black text-pink-300">24/7</h3>
                <p className="text-gray-400 mt-1">Always Here</p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Home;