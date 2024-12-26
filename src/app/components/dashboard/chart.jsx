"use client";

import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ChartCard = ({ title, chartType }) => {
  const [chartData, setChartData] = useState(() => {
    // Generate chart data based on chart type
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
        return {
          options: {},
          series: [],
        };
    }
  });

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4 text-gray-800">{title}</h4>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type={chartType}
        height={300}
      />
    </div>
  );
};

export default ChartCard;
