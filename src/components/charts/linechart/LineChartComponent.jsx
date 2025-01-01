"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Transactions from "./Transactions";

export default function LineChartComponent() {

  const transactionsData = [
    {
      month: "January",
      transactions: 0,
      // product2: 2400,
    },
    {
      month: "February",
      transactions: 3000,
      // product2: 2210,
    },
    {
      month: "March",
      transactions: 2000,
      // product2: 2290,
    },
    {
      month: "April",
      transactions: 2780,
      // product2: 2000,
    },
    {
      month: "May",
      transactions: 1890,
      // product2: 2181,
    },
    {
      month: "June",
      transactions: 2390,
      // product2: 2500,
    },
    {
      month: "July",
      transactions: 2390,
      // product2: 2500,
    },
    {
      month: "August",
      transactions: 2390,
      // product2: 2500,
    },
    {
      month: "Septemebr",
      transactions: 2390,
      // product2: 2500,
    },
    {
      month: "October",
      transactions: 2390,
      // product2: 2500,
    },
    {
      month: "November",
      transactions: 2390,
      // product2: 2500,
    },
    {
      month: "December",
      transactions: 2390,
      // product2: 2500,
    },
  ];

  return (
    <div className="border-8 rounded-lg" style={{height: "400px"}}>
      <Transactions />
      <div className="w-full h-80 pr-8">
        <ResponsiveContainer width="100%" height="80%">
          <LineChart
            width={500}
            height={400}
            data={transactionsData}
            margin={{ right: 30 }}
          >
            <YAxis />
            <XAxis dataKey="month" />
            <CartesianGrid strokeDasharray="5 5" />

            <Tooltip content={<CustomTooltip />} />
            <Legend />

            <Line
              type="monotone"
              dataKey="transactions"
              // stroke="#2563eb"
              // fill="#3b82f6"
              stackId="1"
            />

            {/* <Area
            type="monotone"
            dataKey="product2"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId="1"
          /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium te xt-lg">{label}</p>
        <p className="text-sm text-blue-400">
          transactions:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        {/* <p className="text-sm text-indigo-400">
          Product 2:
          <span className="ml-2">${payload[1].value}</span>
        </p> */}
      </div>
    );
  }
};
