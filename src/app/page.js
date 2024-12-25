"use client"; // Marking this file as a client component

import { useState, useEffect } from "react";
import Landingpage from "./Home/page"; // Import your Landingpage component
import SplashScreen from "./components/Main/splash";


export default function Home() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplash(false); // Hide splash screen after 10 seconds
    }, 7000); // 10 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="">
      {isSplash ? <SplashScreen /> : <Landingpage />} {/* Show splash screen for 10 seconds */}
    </div>
  );
}
