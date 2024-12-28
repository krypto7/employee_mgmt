import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

function CreateTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [discription, setDiscription] = useState("");

  const [task, setTask] = useState({});
  const [userData, setUserData] = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    setTask({
      taskTitle,
      date,
      assign,
      category,
      discription,
      active: true,
      completed: false,
      failed: false,
      newTask: true,
    });

    const data = userData;

    data.forEach((element) => {
      if (assign === element.firstName) {
        element.tasks.push(task);
        element.taskCount.newTask = element.taskCount.newTask + 1;
      }
    });

    setUserData(data);

    setAssign("");
    setCategory("");
    setDate("");
    setDiscription("");
    setTaskTitle("");
    setDiscription("");
  };

  return (
    <div>
      <form
        className="flex gap-5 mt-10 items-start justify-between"
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <div className="flex flex-col gap-5 w-1/2">
          <div>
            <h3>Task Title</h3>
            <input
              className="bg-transparent outline-none border-[1px] px-4 py-2 w-full rounded-lg mt-2"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              className="bg-transparent outline-none border-[1px] px-4 py-2 w-full rounded-lg mt-2"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div>
            <h3>Assign to</h3>
            <input
              className="bg-transparent outline-none border-[1px] px-4 py-2 w-full rounded-lg mt-2"
              type="text"
              value={assign}
              onChange={(e) => setAssign(e.target.value)}
              placeholder="Employee name"
            />
          </div>

          <div>
            <h3>Category</h3>
            <input
              className="bg-transparent outline-none border-[1px] px-4 py-2 w-full rounded-lg mt-2"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design, dev, etc.."
            />
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div>
            <h3>Discrition</h3>
            <textarea
              className="bg-transparent outline-none border-[1px] px-4 py-2 w-full rounded-lg mt-2"
              name=""
              id=""
              cols={50}
              rows={5}
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
            ></textarea>
          </div>
          <button className="bg-emerald-700 border-none px-4 py-2 w-full rounded-lg mt-2">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
