import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import Login from "../Auth/Login";

function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] flex items-center justify-start gap-10 flex-nowrap w-full mt-10 py-5"
    >
      {data.tasks.map((elem, index) => {
        if (elem.active) {
          console.log("active===>", elem.active);
          return <AcceptTask key={index} data={elem} />;
        }
        if (elem.completed) {
          console.log("compled===>", elem.completed);

          return <CompleteTask key={index} data={elem} />;
        }
        if (elem.newtask) {
          console.log("newaks===>", elem.newtask);

          return <NewTask key={index} data={elem} />;
        }
        if (elem.failed) {
          console.log("failed===>", elem.failed);
          return <FailedTask key={index} data={elem} />;
        }
      })}
    </div>
  );
}

export default TaskList;
