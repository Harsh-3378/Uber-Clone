import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import UserDataContext from "../contextData/UserDataContext";
import { useContext } from "react";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    };

    const id = toast.loading("Loading...");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/users/register`,
        newUser
      );

      if (response.status !== 201) {
        throw new Error("Failed to register user");
      }

      const data = response.data;

      toast.update(id, {
        render: "Registration Successful",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/user-home");
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: error.message,
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    }

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
          <h3 className="text-lg font-medium mb-2">What's your name User?</h3>
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
            Create Account
          </button>
        </form>
        <p className="text-center text-sm font-semibold">
          Already have an Account?{" "}
          <Link to="/user-login" className="text-blue-600">
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
};

export default UserSignup;
