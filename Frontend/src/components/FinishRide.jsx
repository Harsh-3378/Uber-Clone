import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = (props) => {
  return (
    <div>
      <h5 className="p-3 text-center absolute top-0 w-full">
        <i
          className="ri-arrow-down-wide-line text-2xl text-gray-500"
          onClick={() => props.setFinishRidePanel((prev) => !prev)}
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2">
        Ride Finished!
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

        <div className="p-4 w-full">
            <Link
              to="/captain-home"
              className="inline-block text-center w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5"
            >
              Finished Ride
            </Link>
            <p className='text-gray-500 mt-4 text-xs text-center'>Click on finish ride if you have completed payment.</p>
        </div>
      </div>
    </div>
  );
}

export default FinishRide
