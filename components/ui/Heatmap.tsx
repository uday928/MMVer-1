import React from "react";
// import { format, subDays } from "date-fns";

// const today = new Date();
// const heatmapData = Array.from({ length: 49 }, (_, i) => {
//   const date = subDays(today, 48 - i);
//   const count = Math.floor(Math.random() * 6); // 0–5 problems
//   return {
//     date: format(date, "MMM d"), // e.g., "Jul 7"
//     value: count,
//   };
// });
const Heatmap = () => {
  return (
    <div className="space-y-2">
      {/* <div className="flex justify-between text-sm text-gray-600">
        <span>Less</span>
        <span>More</span>
      </div> */}
      <div className="m-auto">
        Will be added soon
      </div>
      {/* <div className="grid grid-cols-7 gap-1">
        {heatmapData.map((day, i) => {
          const color =
            day.value >= 5
              ? "bg-green-600"
              : day.value >= 3
              ? "bg-green-400"
              : day.value >= 1
              ? "bg-green-200"
              : "bg-gray-200";

          return (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm relative group ${color} transition-all duration-200`}
            >
              <div className="absolute z-10 hidden group-hover:flex bottom-6 left-1/2 -translate-x-1/2 bg-white text-gray-800 text-xs border border-gray-300 px-3 py-2 rounded-md shadow flex-col items-center whitespace-nowrap min-w-[100px] text-center">
                <span className="font-medium">{day.date}</span>
                <span className="text-gray-600">
                  {day.value}
                </span>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Heatmap;
