"use client"; // Ensure this file uses the client-side rendering in Next.js

import ChartCard from "../components/dashboard/chart";
import Sidebar from "../components/dashboard/sidebar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-200">
      {/* Sidebar */}
      <div className="lg:w-[20vw]  w-full lg:flex sm:hidden">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6  sm:ml-0 sm:w-full transition-all ">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="mb-4">
          <span className="text-gray-600">Cluster:</span>
          <select className="ml-2 border p-2 rounded">
            <option>Kos Fivi</option>
            <option>Other Cluster</option>
          </select>
          <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded">
            TAMPILKAN CLUSTER
          </button>
        </div>

        {/* Chart and Data Section */}
        <div className="grid grid-cols-1 gap-4">
          <ChartCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
