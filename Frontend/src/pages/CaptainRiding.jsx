import React from 'react'
import { Link } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from '../components/FinishRide';
import { useRef, useState } from 'react';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);
    const finishRidePanelRef  = useRef(null)

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div onClick={()=> setFinishRidePanel(prev => !prev)} className="h-1/5 p-5 bg-yellow-400 flex items-center justify-between relative">
        <h5 className="absolute top-0 mx-auto left-0 right-0 text-center">
          <i className="ri-arrow-up-wide-line text-2xl text-gray-800"></i>
        </h5>
        <h4 className="text-xl font-medium">4 KM away</h4>
        <button className=" bg-green-600 text-white font-semibold px-8 p-3 rounded-lg">
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed h-screen z-10 bottom-0 translate-y-full bg-white w-full px-3 py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
}

export default CaptainRiding
