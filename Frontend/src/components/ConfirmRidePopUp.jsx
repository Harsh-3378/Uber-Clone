import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {

    const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("OTP Submitted", e);
  };

  return (
    <div>
      <h5 className="p-3 text-center absolute top-0 w-full">
        <i
          className="ri-arrow-down-wide-line text-2xl text-gray-500"
          onClick={() => props.setConfirmRidePopUpPanel((prev) => !prev)}
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2">
        Confirm this Ride to start!
      </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-6">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5VKf1uPhFJ0dB49jIeLMsAjn5K3IGQ7vmw&s"
            alt=""
          />
          <h2 className="text-lg font-medium text-gray-700">Harsh Patel</h2>
        </div>
        <h5 className="text-sm font-medium text-gray-700">2.2 KM</h5>
      </div>
      <div className="flex gap-3 justify-between items-center flex-col">
        <div className="w-full mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$50</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              className="bg-[#eee] px-6 py-4 text-base font-mono rounded-lg w-full"
              type="text"
              placeholder="Enter your OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Link
              to="/captain-riding"
              className="inline-block text-center w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel((prev) => !prev);
              }}
              className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg mt-2 "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
