import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CaptainDataContext from "../contextData/CaptainDataContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const navigate = useNavigate();

  const { setCaptain } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newCaptain = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
      vehicle: {
        vehicleType: vehicleType,
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
      },
    };

    const id = toast.loading("Loading...");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/register`,
        newCaptain
      );

      if (response.status !== 201) {
        throw new Error("Registration failed !!");
      }

      toast.update(id, {
        render: "Registration Successful",
        type: "success",
        isLoading: false,
        autoClose: 2000,
      });

      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");

      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setVehicleColor("");
      setVehiclePlate("");
      setVehicleCapacity("");
      setVehicleType("");

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
          <h3 className="text-lg font-medium mb-2">
            What's your name Captain?
          </h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle information</h3>

          <div className="w-full flex justify-between mb-4">
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
              className="bg-[#eeeeee] rounded px-4 py-2 w-[48%] text-md placeholder:text-sm"
            >
              <option value="" className="" disabled>
                Select vehicle type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>

            <input
              type="text"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              required
              placeholder="Vehicle color"
              className="bg-[#eeeeee] rounded px-4 py-2 w-[48%] text-md placeholder:text-sm"
            />
          </div>

          <div className="w-full flex justify-between mb-6">
            <input
              type="text"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              required
              placeholder="Vehicle plate"
              className="bg-[#eeeeee] rounded px-4 py-2 w-[48%] text-md placeholder:text-sm"
            />

            <input
              type="number"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              required
              min={1}
              placeholder="Seating capacity"
              className="bg-[#eeeeee] rounded px-4 py-2 w-[48%] text-md placeholder:text-sm"
            />
          </div>
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-md placeholder:text-sm">
            Create Captain Account
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
};

export default CaptainSignup;
