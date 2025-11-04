"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { sampleData } from "@/lib/sampleData";

export default function ExchangeChart() {
  return (
    <div className="w-full h-80 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
      <h3 className="text-xl font-bold text-center mb-4 text-blue-500">USD to PKR Trend</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sampleData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="rate" stroke="#3b82f6" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
