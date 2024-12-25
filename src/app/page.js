"use client"; // Marking this file as a client component

import { useState, useEffect } from "react";
import Landingpage from "./Home/page"; // Import your Landingpage component
import SplashScreen from "./components/Main/splash";

export default function Home() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false); // Hide splash screen after 7 seconds
    }, 7000); // 7 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="relative">
      {isSplash ? (
        <div className="absolute inset-0 z-50">
          <SplashScreen />
        </div>
      ) : (
        <Landingpage />
      )}
    </div>
  );
}
