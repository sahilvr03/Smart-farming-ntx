"use client"; // Marking this file as a client component

import { useState, useEffect } from "react";
import Landingpage from "./Home/page"; // Import your Landingpage component
import SplashScreen from "./components/Main/splash";

export default function Home() {
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    // Disable scroll when splash screen is shown
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsSplash(false); // Hide splash screen after 7 seconds
      document.body.style.overflow = "auto"; // Re-enable scroll after splash screen disappears
    }, 7000); // 7 seconds

    return () => {
      clearTimeout(timer); // Clean up the timer
      document.body.style.overflow = "auto"; // Ensure scroll is re-enabled if component unmounts
    };
  }, []);

  return (
    <div className="relative">
      {/* Landing page displayed in the background */}
      <Landingpage />

      {/* Splash screen overlay */}
      {isSplash && (
        <div className="absolute inset-0 bg-white z-50  justify-center items-center">
          <SplashScreen />
        </div>
      )}
    </div>
  );
}
