"use client"
// components/ChartCard.js
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryTheme } from 'victory';

const data = [
  { name: "13/08", value: 10 },
  { name: "14/08", value: 100 },
  { name: "15/08", value: 40 },
  { name: "16/08", value: 30 },
  { name: "17/08", value: 90 },
  { name: "18/08", value: 10 },
];

const ChartCard = () => {
  return (
    <div className="p-6 bg-white shadow rounded-md">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">device-004</h2>
          <p className="text-gray-500 text-sm">ID: 047051a3</p>
        </div>
        <select className="border p-2 rounded">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Chart Section */}
      <div className="mt-4">
        <VictoryChart theme={VictoryTheme.material} width={600} height={250}>
          <VictoryLine
            data={data}
            x="name"
            y="value"
            style={{
              data: { stroke: "#8884d8", strokeWidth: 2 },
              parent: { border: "1px solid #ccc" }
            }}
          />
          <VictoryAxis
            label="Date"
            tickFormat={data.map(item => item.name)}  // Set custom tick format to match the dates
          />
          <VictoryAxis dependentAxis label="Value" />
          <VictoryTooltip
            flyoutStyle={{ fill: "#fff", stroke: "#ccc" }}
            style={{ fontSize: 10 }}
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default ChartCard;
