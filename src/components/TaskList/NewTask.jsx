import React from "react";

function NewTask({ data }) {
  return (
    <div className="flex flex-col gap-4 flex-shrink-0 h-full w-[300px] bg-green-600 rounded-xl px-5 py-7">
      <div className="flex justify-between">
        <h2 className="bg-gray-700 px-1 rounded-md font-semibold">{data.category}</h2>
        <h2 className="font-semibold">{data.dueDate}</h2>
      </div>
      <h1 className="text-2xl font-semibold">{data.taskTitle}</h1>
      <h2 className="font-medium text-[1rem]">{data.taskDescription}</h2>
      <div>
        <button>Accept Task</button>
      </div>
    </div>
  );
}

export default NewTask;
