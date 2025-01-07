"use client";

import React, { useState, useEffect, useRef } from "react";
import MainContent from "../components/Admin/dashboard";
import Analytics from "../components/Admin/analytics";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // Track active menu item

  const sidebarRef = useRef(null); // Ref for sidebar

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Delay for smoother animation
    return () => clearTimeout(timer);
  }, []);

  const handleMenuClick = (item) => {
    setActiveMenu(item); // Set the active menu
    setIsSidebarOpen(false); // Close sidebar on menu click (optional)
  };

  const handleOutsideClick = (e) => {
    // Close sidebar if click is outside the sidebar on mobile view
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen flex bg-gray-100 z-50 fixed w-[100vw]">
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 bg-green-600 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:static md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">SmartFarming</h1>
          <p className="text-sm mt-1">Admin Dashboard</p>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 flex-1 flex flex-col items-center space-y-4">
          {["Dashboard", "Analytics", "Users", "Fields", "Settings"].map(
            (item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item)} // Handle menu button click
                className={`p-2 w-40 rounded-full shadow-md transition-all duration-500 ease-in-out transform ${
                  activeMenu === item
                    ? "bg-green-700"
                    : "bg-green-500 hover:bg-green-400"
                } ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item}
              </button>
            )
          )}
        </nav>

        {/* Logout Button */}
        <div
          className={`p-4 flex justify-center transform transition-all duration-500 ease-in-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <button className="w-40 bg-red-500 hover:bg-red-400 text-white py-2 rounded-full shadow-md">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Open Sidebar Button (Mobile Only) */}
        {/* Hide this button when 'MainContent' is active */}
        {activeMenu !== "Dashboard" && (
          <button
            className="md:hidden bg-green-500 text-white p-2 rounded-md mb-4 fixed left-4 top-4 z-50"
            onClick={() => setIsSidebarOpen(true)}
          >
            ☰
          </button>
        )}
        
        {activeMenu === "Dashboard" && (
          <MainContent setIsSidebarOpen={setIsSidebarOpen} />
        )}
        {activeMenu === "Analytics" && <Analytics />}
      </div>
    </div>
  );
};

export default Dashboard;
