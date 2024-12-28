import React from "react";
import Header from "../../others/Header";
import TaskCount from "../../others/TaskCount";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboad({ data, changeUser }) {
  console.log("====>", data);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={changeUser} data={data} />
      <TaskCount data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboad;
