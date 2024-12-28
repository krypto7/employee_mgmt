import React from "react";

function TaskCount({ data }) {
  return (
    <div className="flex justify-between gap-5 w-full mt-10 ">
      <div className="rounded-xl py-6 px-9  bg-red-600 w-[50%] ">
        <h2 className="text-3xl font-semibold">{data?.taskCount?.active}</h2>
        <h3 className="text-2xl font-medium">Active Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9  bg-blue-600 w-[50%] ">
        <h2 className="text-3xl font-semibold">{data?.taskCount?.newTask}</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9  bg-green-600 w-[50%] ">
        <h2 className="text-3xl font-semibold">{data?.taskCount?.completed}</h2>
        <h3 className="text-2xl font-medium">completed Task</h3>
      </div>
      <div className="rounded-xl py-6 px-9  bg-yellow-600 w-[50%] ">
        <h2 className="text-3xl font-semibold">{data?.taskCount?.failed}</h2>
        <h3 className="text-2xl font-medium">failed Task</h3>
      </div>
    </div>
  );
}

export default TaskCount;
