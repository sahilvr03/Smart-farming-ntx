import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Chart component with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Analytics = () => {
  const [visibleGraphs, setVisibleGraphs] = useState({
    soilMoisture: true,
    soilConductivity: true,
    batteryVoltage: true,
    soilTemperature: true,
  });

  const chartOptions = {
    chart: {
      id: "sensor-data",
      type: "line",
      toolbar: {
        show: true,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    colors: ["#1E90FF", "#FF6347", "#32CD32", "#FFD700"],
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
  };

  const chartSeries = [
    visibleGraphs.soilMoisture && {
      name: "Soil Moisture",
      data: [30, 40, 35, 50, 49, 60],
    },
    visibleGraphs.soilConductivity && {
      name: "Soil Conductivity",
      data: [20, 30, 40, 25, 35, 50],
    },
    visibleGraphs.batteryVoltage && {
      name: "Battery Voltage",
      data: [12, 13, 14, 15, 14, 13],
    },
    visibleGraphs.soilTemperature && {
      name: "Soil Temperature",
      data: [15, 16, 17, 18, 19, 20],
    },
  ].filter(Boolean);

  const toggleGraph = (key) => {
    setVisibleGraphs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Sensor Analytics
      </h2>

      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => toggleGraph("soilMoisture")}
          className={`px-4 py-2 rounded-full text-white font-semibold transition ${
            visibleGraphs.soilMoisture ? "bg-blue-600" : "bg-gray-400"
          } hover:bg-blue-700`}
        >
          Soil Moisture
        </button>
        <button
          onClick={() => toggleGraph("soilConductivity")}
          className={`px-4 py-2 rounded-full text-white font-semibold transition ${
            visibleGraphs.soilConductivity ? "bg-red-600" : "bg-gray-400"
          } hover:bg-red-700`}
        >
          Soil Conductivity
        </button>
        <button
          onClick={() => toggleGraph("batteryVoltage")}
          className={`px-4 py-2 rounded-full text-white font-semibold transition ${
            visibleGraphs.batteryVoltage ? "bg-green-600" : "bg-gray-400"
          } hover:bg-green-700`}
        >
          Battery Voltage
        </button>
        <button
          onClick={() => toggleGraph("soilTemperature")}
          className={`px-4 py-2 rounded-full text-white font-semibold transition ${
            visibleGraphs.soilTemperature ? "bg-yellow-600" : "bg-gray-400"
          } hover:bg-yellow-700`}
        >
          Soil Temperature
        </button>
      </div>

      <div className="rounded-lg shadow-lg p-4 bg-gray-50">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default Analytics;
