import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="border-2 border-emerald-500 p-20 rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="border-2 p-3 rounded-full border-emerald-500 outline-none bg-transparent "
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <input
            className="border-2 p-3 rounded-full border-emerald-500 outline-none bg-transparent"
            type="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button className="border-2 p-3 rounded-full bg-emerald-500 border-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
