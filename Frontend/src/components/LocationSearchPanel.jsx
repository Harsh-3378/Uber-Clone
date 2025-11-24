import React from 'react'

const LocationSearchPanel = (props) => {

    const locations = [
        ' 24B, Near Kapoor\'s cafe, Sheryians Coding School Bhopal',
        ' 34B, Near nehru park, river side Bhopal',
        ' 54B, Near gandhi square, MG road Bhopal',
    ]

  return (
    <div>
      {/* This is just a sample location data */}
      {locations.map((location, index) => (
        <div key={index} onClick={()=> {
            props.setVehiclePanelOpen((prev) => !prev);
            props.setPanelOpen(prev => !prev);
        }} className="flex justify-start items-center my-4 active:border-2 active:border-black rounded-lg p-2">
          <h2 className="bg-[#eee] rounded-full p-2 mr-4">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium">
            {location}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default LocationSearchPanel
