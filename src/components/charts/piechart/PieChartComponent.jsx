"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import Portfolio from "./Portfolio";

const PieChartComponent = () => {
  const salesData = [
    { name: "Jan", revenue: 4000, profit: 2400 },
    { name: "Feb", revenue: 3000, profit: 1398 },
    { name: "Mar", revenue: 9800, profit: 2000 },
    { name: "Apr", revenue: 3908, profit: 2780 },
  ];

  // Combine total revenue and profit per month for pie chart representation
  const pieData = salesData.map((data) => ({
    name: data.name,
    value: data.revenue + data.profit,
  }));

  const COLORS = [
    "#2563eb",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#3b82f6",
  ];

  return (
    <div className="w-full border rounded-lg">
      <Portfolio />
      <div className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
