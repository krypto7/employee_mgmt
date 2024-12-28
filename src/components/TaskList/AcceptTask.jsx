import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 flex-shrink-0 h-full w-[300px] bg-yellow-600 rounded-xl px-5 py-7">
      <div className="flex justify-between">
        <h2 className="bg-red-700 px-1 rounded-md font-semibold">
          {data.category}
        </h2>
        <h2 className="font-semibold">{data.dueDate}</h2>
      </div>
      <h1 className="text-2xl font-semibold">{data.taskTitle}</h1>
      <h2 className="font-medium text-[1rem]">{data.taskDescription}</h2>
      <div className="flex justify-between mt-4">
        <button className="bg-green-800 py-1 px-2 text-sm">
          Mark as Completed
        </button>
        <button className="bg-red-800 py-1 px-2 text-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
