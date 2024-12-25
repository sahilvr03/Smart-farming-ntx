"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 80);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [router]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 95, 70, 0.1) 100%)"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwgMTg1LCAxMjksIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/30 to-emerald-100/30" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Animated Logo */}
        <div className="relative">
          <motion.div
            className="absolute -inset-4 rounded-full bg-emerald-500/20 blur-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="relative"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-6xl">🌱</span>
              <span className="text-6xl">🚜</span>
            </div>
          </motion.div>
        </div>

        {/* Title and Subtitle */}
        <motion.div
          className="mt-12 text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.h1
            className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Smart Farming
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-emerald-700/80 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Cultivating Tomorrow's Agriculture
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mt-16 w-full max-w-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-emerald-100/50 backdrop-blur-sm">
            <motion.div
              className="absolute inset-0 bg-emerald-500"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 opacity-50"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                transform: "translateX(-100%)",
              }}
              animate={{ translateX: ["-100%", "400%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.p
            className="mt-3 text-center text-sm font-medium text-emerald-800/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Loading your smart farming experience...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;