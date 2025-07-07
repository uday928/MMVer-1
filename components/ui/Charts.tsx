import React from 'react'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts"

const dailySolved = [
  { date: "Jun-24", count: 3 },
  { date: "Jun-25", count: 5 },
  { date: "Jun-26", count: 2 },
  { date: "Jun-27", count: 4 },
  { date: "Jun-28", count: 6 },
  { date: "Jun-29", count: 1 },
  { date: "Jun-30", count: 0 },
]

const Charts = () => {
  return (
     <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dailySolved}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#64748b" /* slate‑500 */ }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748b" }}
            allowDecimals={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(99, 102, 241, .08)" }} // indigo‑500/8
            contentStyle={{
              borderRadius: "0.5rem",
              border: "1px solid #e5e7eb", // gray‑200
              background: "#ffffff",
              fontSize: "0.75rem",
            }}
            formatter={(value) => [value, "Solved"]}
            labelFormatter={(label) => `${label}`}
          />
          <Bar
            dataKey="count"
            fill="#6366f1" // indigo‑500
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Charts
