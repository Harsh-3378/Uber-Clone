import React from 'react'
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to="/user-home"  className='fixed h-10 w-10 bg-white flex items-center justify-center rounded-full m-4'>
        <i className='text-lg font-medium ri-home-5-line'></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-5 ">
        <div className="flex items-center gap-3 mb-5">
          <img
            className="h-24"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwz1lf3_vvNTLV1RwM8qDeVoLnPe_jPUkf-g&s"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Sarthak</h2>
            <h4 className="text-xl font-semibold">GJ-16-BN-3378</h4>
            <p className="text-sm text-gray-600 font-sans">Swift Dzire</p>
          </div>
        </div>
        <div className="flex justify-between items-center flex-col">
          <div className="w-full">
            <div className="flex items-center gap-5 p-3 border-b-2 border-gray-300">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-md font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-currency-line"></i>
              <div>
                <h3 className="text-md font-medium">$50</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5">
          Make a Payment
        </button>
      </div>
    </div>
  );
}

export default Riding
