import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [captainData, setCaptainData] = useState({});

const submitHandler = (e) => {
  e.preventDefault();

  setCaptainData({
    fullname: {
      firstname: firstName,
      lastname: lastName,
    },
    email,
    password,
  });
  console.log(captainData);
  setFirstName("");
  setLastName("");
  setEmail("");
  setPassword("");
};

return (
  <div className="p-7 flex flex-col justify-between h-screen">
    <div>
      <img
        className="w-14 mb-7"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <form onSubmit={submitHandler}>
        <h3 className="text-lg font-medium mb-2">What's your name Captain?</h3>
        <div className="w-full flex justify-between">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="First name"
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 w-[48%] text-md placeholder:text-sm"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Last name"
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 w-[48%] text-md placeholder:text-sm"
          />
        </div>

        <h3 className="text-lg font-medium mb-2">What's your email?</h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
          className="bg-[#eeeeee] mb-4 rounded px-4 py-2 w-full text-md placeholder:text-sm"
        />

        <h3 className="text-lg font-medium mb-2">Password</h3>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          className="bg-[#eeeeee] mb-4 rounded px-4 py-2 w-full text-md placeholder:text-sm"
        />
        <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-md placeholder:text-sm">
          Sign Up
        </button>
      </form>
      <p className="text-center text-sm font-semibold">
        Already have an Account?{" "}
        <Link to="/captain-login" className="text-blue-600">
          Login
        </Link>
      </p>
    </div>

    <div>
      <img
        src="https://mir-s3-cdn-cf.behance.net/projects/404/da625f209983035.Y3JvcCwxNjU5LDEyOTcsMjQsMjk5.png"
        alt="image"
        className="rounded-lg "
      />
    </div>
  </div>
);
}

export default CaptainSignup
