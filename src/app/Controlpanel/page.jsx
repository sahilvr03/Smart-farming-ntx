"use client";

import React, { useState, useEffect } from "react";
import ChartCard from "../components/dashboard/chart";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100); // Add a slight delay for smoother animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex bg-gray-100 z-50 fixed w-[100vw]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-green-600 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:static md:translate-x-0`}
      >
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold">SmartFarming</h1>
          <p className="text-sm mt-1">Admin Dashboard</p>
        </div>
        <nav className="mt-6 flex-1 flex flex-col items-center space-y-4">
          {["Dashboard", "Analytics", "Users", "Fields", "Settings"].map(
            (item, index) => (
              <button
                key={index}
                className={`p-2 w-40 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-md transition-all duration-500 ease-in-out transform ${
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
      <main className="flex-1 h-screen overflow-y-scroll">
        {/* Top Navigation */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button */}
            <button
              className="md:hidden text-green-600 focus:outline-none"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
              Add Field
            </button>
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm text-gray-800 font-bold">H</span>
            </div>
          </div>
        </header>

        {/* Analytics Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Cards */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">Total Fields</h3>
            <p className="text-3xl font-bold mt-4 text-green-600">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Active Sensors
            </h3>
            <p className="text-3xl font-bold mt-4 text-green-600">85</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">Water Usage</h3>
            <p className="text-3xl font-bold mt-4 text-green-600">1,200 L</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800">
              Pending Tasks
            </h3>
            <p className="text-3xl font-bold mt-4 text-green-600">7</p>
          </div>
        </div>

        {/* Detailed Analytics */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Analytics Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <ChartCard title="Fields Growth" chartType="line" />
            <ChartCard title="Water Usage" chartType="bar" />
            <ChartCard title="Sensor Status" chartType="pie" />
            <ChartCard title="Yield Analysis" chartType="area" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
