"use client";

import React from "react";
import ChartCard from "./chart"; // Adjust path as necessary

const MainContent = ({ setIsSidebarOpen }) => {
  return (
    <main className="flex-1 h-screen overflow-y-scroll">
      {/* Top Navigation */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-green-600 focus:outline-none"
            onClick={() => setIsSidebarOpen((prev) => !prev)}
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
          <button className="bg-green-500 text-sm text-white px-4 py-2 rounded-full hover:bg-green-600">
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
          <h3 className="text-lg font-semibold text-gray-800">Active Sensors</h3>
          <p className="text-3xl font-bold mt-4 text-green-600">85</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">Water Usage</h3>
          <p className="text-3xl font-bold mt-4 text-green-600">1,200 L</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800">Pending Tasks</h3>
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
  );
};

export default MainContent;
