"use client";
import React from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ProfitAndLoss from "./ProfitAndLoss";

const VerticalBarChartComponent = () => {
  const salesData = [
    { name: "Bitcoin", revenue: 4000, profit: 2400 },
    { name: "Trust Wallet", revenue: 3000, profit: 1398 },
    { name: "Coin Base", revenue: 9800, profit: 2000 },
    { name: "Base", revenue: 3908, profit: 2780 },
    { name: "Dexalot", revenue: 4800, profit: 1890 },
  ];

  return (
    <div className="w-full border rounded-lg">
      <ProfitAndLoss />
      <div className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={salesData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="revenue" fill="#2563eb" barSize={20} />
            <Bar dataKey="profit" fill="#8b5cf6" barSize={20} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue: <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit: <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default VerticalBarChartComponent;
