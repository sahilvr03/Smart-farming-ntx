"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartCard = ({ title = "Chart", chartType = "line" }) => {
  // Memoized chart data
  const chartData = useMemo(() => {
    switch (chartType) {
      case "line":
        return {
          options: {
            chart: { id: "line-chart" },
            xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
          },
          series: [{ name: "Fields", data: [30, 40, 35, 50, 49, 60] }],
        };
      case "bar":
        return {
          options: {
            chart: { id: "bar-chart" },
            xaxis: { categories: ["Field A", "Field B", "Field C", "Field D"] },
          },
          series: [{ name: "Water Usage", data: [400, 300, 200, 500] }],
        };
      case "pie":
        return {
          options: { labels: ["Active", "Inactive"] },
          series: [85, 15],
        };
      case "area":
        return {
          options: {
            chart: { id: "area-chart" },
            xaxis: { categories: ["Week 1", "Week 2", "Week 3", "Week 4"] },
          },
          series: [{ name: "Yield", data: [50, 70, 65, 90] }],
        };
      default:
        console.warn(`Unsupported chart type: ${chartType}`);
        return {
          options: {
            chart: { id: "default-chart" },
            xaxis: { categories: [] },
          },
          series: [],
        };
    }
  }, [chartType]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
      {chartData.series.length > 0 ? (
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type={chartType}
          height={300}
        />
      ) : (
        <p className="text-gray-500">No data available for the selected chart type.</p>
      )}
    </div>
  );
};

export default ChartCard;
