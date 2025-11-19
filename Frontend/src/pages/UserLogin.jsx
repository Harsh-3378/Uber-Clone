import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userData, setUserData] = useState({})


    const submitHandler = (e) => {
        e.preventDefault();
        
        setUserData({ email, password });
        console.log(userData);
        setEmail("");
        setPassword("");
    }

  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-14 mb-7"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-md placeholder:text-sm"
          />

          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-md placeholder:text-sm"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-md placeholder:text-sm">
            Login
          </button>
        </form>
        <p className="text-center text-sm font-semibold">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
        <Link to="/captain-login" className="flex justify-center items-center bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-md placeholder:text-sm">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
