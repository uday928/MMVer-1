import React from 'react'

const Task = () => {
  return (
    <div className="space-y-4">
  {[
    {
      title: "Solve 5 LeetCode Easy Problems",
      status: "In Progress",
      deadline: "14-07-2025",
      day:4,
      completed: false,
      color: "blue",
    },
    {
      title: "Implement BFS in Java",
      status: "Completed",
      deadline: "10-07-2025",
      completed: true,
      day:5,
      color: "green",
    },
    {
      title: "Watch DP tutorial and take notes",
      status: "Overdue",
      deadline: "06-07-2025",
      completed: false,
      day:7,
      color: "red",
    },
  ].map((task, index) => (
    <div
      key={index}
      className={`border-l-4 rounded-md p-4 shadow-sm bg-white ${
        task.color === "green"
          ? "border-green-500"
          : task.color === "red"
          ? "border-red-500"
          : "border-blue-500"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg">{task.title}</h4>
        </div>
        <div className="flex space-x-2">
          {task.completed ? (
            <span className="text-green-700 bg-green-100 text-xs px-2 py-1 rounded-full">
              Completed
            </span>
          ) : (
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                task.status === "Overdue"
                  ? "text-red-700 bg-red-100"
                  : "text-blue-700 bg-blue-100"
              }`}
            >
              {task.status}
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <span>Deadline: {task.deadline}</span>
      </div>
    </div>
  ))}
</div>

  )
}

export default Task
