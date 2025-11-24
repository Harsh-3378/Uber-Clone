import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CaptainDataContext from "../contextData/CaptainDataContext";
import axios from "axios";
import { toast } from "react-toastify";

const CaptainLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setCaptainData} = useContext(CaptainDataContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const captainData = {
            email: email,
            password: password,
        };
        const id = toast.loading("Loading...");
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/captains/login`, captainData
            );
            if (response.status !== 200) {
                throw new Error("Failed to login !!");
            }
            toast.update(id, {
                render: "Login Successful",
                type: "success",
                isLoading: false,
                autoClose: 2000,
            });
            const data = response.data;
            localStorage.setItem("token", data.token);
            setCaptainData(data.captain);
            navigate("/captain-home");
        } catch (error) {
            console.log(error);
            toast.update(id, {
                render: error.message,
                type: "error",
                isLoading: false,
                autoClose: 2500,
            });
        }
        
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
          Join a fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600">
            Register as Captain
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/user-login"
          className="flex justify-center items-center bg-[#d5622d] text-white font-semibold mb-7 rounded px-4 py-2 border w-full text-md placeholder:text-sm"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
