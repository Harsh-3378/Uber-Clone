import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className="p-3 text-center absolute top-0 w-full">
        <i
          className="ri-arrow-down-wide-line text-2xl text-gray-500"
          onClick={() => props.setVehiclePanelOpen((prev) => !prev)}
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-2">Choose a ride</h3>

      <div
        onClick={() => {props.setConfirmRideOpen((prev) => !prev); props.setVehiclePanelOpen((prev) => !prev);}}
        className="flex items-center justify-between p-3 active:border-2 active:border-black rounded-xl mt-3"
      >
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwz1lf3_vvNTLV1RwM8qDeVoLnPe_jPUkf-g&s"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium">
            UberGo{" "}
            <span>
              <i className="ri-user-3-line"></i> 4
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">$20</h2>
      </div>

      <div onClick={()=> {props.setConfirmRideOpen((prev) => !prev); props.setVehiclePanelOpen((prev) => !prev);}} className="flex items-center justify-between p-3 active:border-2 active:border-black rounded-xl mt-3">
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mY2RkZWNhYS0yZWVlLTQ4ZmUtODdmMC02MTRhYTdjZWU3ZDMucG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium">
            Moto{" "}
            <span>
              <i className="ri-user-3-line"></i> 1
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">$50</h2>
      </div>

      <div onClick={()=> {props.setConfirmRideOpen((prev) => !prev); props.setVehiclePanelOpen((prev) => !prev);}} className="flex items-center justify-between p-3  active:border-2 active:border-black rounded-xl mt-3">
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-line"></i> 3
            </span>
          </h4>
          <h5 className="text-sm">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-2xl font-semibold">$10</h2>
      </div>
    </div>
  );
}

export default VehiclePanel
