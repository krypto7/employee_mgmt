import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="border-[1px] border-white  mb-2 px-4 flex justify-between items-center rounded-lg py-2 ">
        <h2 className="w-1/5 ">Employee Name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">Completed</h5>
        <h5 className="w-1/5 ">Failed</h5>
      </div>
      <div className="h-[80%]  overflow-auto">
        {userData.map((item, index) => (
          <div
            key={index}
            className="mb-2 px-4 flex justify-between items-center rounded-lg py-2"
          >
            <h2 className="w-1/5 ">{item.firstName}</h2>
            <h3 className="w-1/5 text-blue-600">{item.taskCount.newTask}</h3>
            <h5 className="w-1/5 text-yellow-600">{item.taskCount.active}</h5>
            <h5 className="w-1/5 text-green-600">{item.taskCount.completed}</h5>
            <h5 className="w-1/5 text-red-600">{item.taskCount.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllTask;
