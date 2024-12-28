import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboad from "./components/Dashboad/EmployeeDashboad";
import AdminDashboad from "./components/Dashboad/AdminDashboad";
import { AuthContext } from "./context/AuthProvider";
function App() {
  const [user, setUser] = useState(null);
  const [logedinUserData, setLogedinUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLogedinUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (data) => data.email === email && data.password === password
      );
      if (employee) {
        setUser("employees");
        setLogedinUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", data: employee })
        );
      }
    } else {
      alert("invalid user");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboad changeUser={setUser} />
      ) : user == "employees" ? (
        <EmployeeDashboad changeUser={setUser} data={logedinUserData} />
      ) : null}
    </>
  );
}

export default App;
