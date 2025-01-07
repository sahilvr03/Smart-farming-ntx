"use client"
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie";

// Importing Lottie animation JSON files
import SoilMoistureAnim from "@/app/animations/soilmoisture.json";
import SoilConductivityAnim from "@/app/animations/soilConductivity.json";
import BatteryVoltageAnim from "@/app/animations/batteryVoltage.json";
import SoilTemperatureAnim from "@/app/animations/temperature.json";

// Dynamically import the Chart component with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const sensorData = {
  soilMoisture: {
    title: "Soil Moisture",
    info: "Soil moisture is a critical factor affecting crop growth and soil health.",
    data: [30, 40, 35, 50, 49, 60],
    color: "#1E90FF",
    animation: SoilMoistureAnim, // Add corresponding animation
  },
  soilConductivity: {
    title: "Soil Conductivity",
    info: "Soil conductivity indicates the ability of soil to conduct electrical current.",
    data: [20, 30, 40, 25, 35, 50],
    color: "#FF6347",
    animation: SoilConductivityAnim, // Add corresponding animation
  },
  batteryVoltage: {
    title: "Battery Voltage",
    info: "Battery voltage indicates the power status of connected sensors.",
    data: [12, 13, 14, 15, 14, 13],
    color: "#32CD32",
    animation: BatteryVoltageAnim, // Add corresponding animation
  },
  soilTemperature: {
    title: "Soil Temperature",
    info: "Soil temperature affects seed germination and plant growth.",
    data: [15, 16, 17, 18, 19, 20],
    color: "#FFD700",
    animation: SoilTemperatureAnim, // Add corresponding animation
  },
};

const Analytics = () => {
  const [activeSensor, setActiveSensor] = useState("soilMoisture");

  const chartOptions = {
    chart: {
      id: "sensor-data",
      type: "line",
      toolbar: { show: true },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: [sensorData[activeSensor].color],
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  const chartSeries = [
    {
      name: sensorData[activeSensor].title,
      data: sensorData[activeSensor].data,
    },
  ];

  // Lottie animation options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: sensorData[activeSensor].animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md overflow-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sensor Analytics
      </h2>

      {/* Sensor Selection Dropdown */}
      <div className="flex flex-col md:flex-row gap-6 overflow-auto">
        <div className="md:w-1/3 bg-gray-100 rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-semibold mb-4">Select Sensor</h3>
          <select
            value={activeSensor}
            onChange={(e) => setActiveSensor(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
          >
            {Object.keys(sensorData).map((key) => (
              <option key={key} value={key}>
                {sensorData[key].title}
              </option>
            ))}
          </select>

          {/* Sensor Info for Desktop */}
          <div className="hidden md:block mt-4">
            <h4 className="text-md font-semibold text-gray-700">
              {sensorData[activeSensor].title} Info
            </h4>
            <p className="text-sm text-gray-600">
              {sensorData[activeSensor].info}
            </p>
            {/* Lottie animation for the current sensor */}
            <div className="mt-4">
              <Lottie options={lottieOptions} height={200} width={200} />
            </div>
          </div>
        </div>

        {/* Sensor Graph Section */}
        <div className="md:w-2/3 bg-gray-50 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-2 text-gray-700">
            {sensorData[activeSensor].title}
          </h3>
          <div className="rounded-lg overflow-hidden">
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="line"
              height={350}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Analytics;
