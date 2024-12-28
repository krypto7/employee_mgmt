import React from "react";

function Header({ changeUser, data }) {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload();
    changeUser("");
  };

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl">
        Hello <br />
        <span className="text-3xl font-medium">
          {/* {!data ? "admin" : data.firstName} 🖐 */}
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className="px-10 py-3 bg-red-600 rounded-full"
      >
        Log out
      </button>
    </div>
  );
}

export default Header;
