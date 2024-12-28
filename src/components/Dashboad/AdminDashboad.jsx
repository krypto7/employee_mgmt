import React from "react";
import Header from "../../others/Header";
import CreateTask from "../../others/CreateTask";
import AllTask from "../../others/AllTask";

function AdminDashboad({ changeUser }) {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboad;
