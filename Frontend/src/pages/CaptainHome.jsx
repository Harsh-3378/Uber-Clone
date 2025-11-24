import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "remixicon/fonts/remixicon.css";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
  const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

  const ridePopUpPaneRef = useRef(null)
  const confirmRidePopUpPaneRef = useRef(null)

  useGSAP(
    function () {
      if (ridePopUpPanel) {
        gsap.to(ridePopUpPaneRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopUpPaneRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopUpPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopUpPanel) {
        gsap.to(confirmRidePopUpPaneRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopUpPaneRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopUpPanel]
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
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-5 ">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopUpPaneRef}
        className="fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-6 pt-12"
      >
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div
        ref={confirmRidePopUpPaneRef}
        className="fixed h-screen z-10 bottom-0 translate-y-full bg-white w-full px-3 py-6 pt-12"
      >
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
