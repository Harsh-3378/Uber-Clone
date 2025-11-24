import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className="p-3 text-center absolute top-0 w-full">
        <i
          className="ri-arrow-down-wide-line text-2xl text-gray-500"
          onClick={() => props.setWaitingForDriver((prev) => !prev)}
        ></i>
      </h5>
      <div className='flex items-center gap-10 mb-5'>
        <img
          className="h-24"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwz1lf3_vvNTLV1RwM8qDeVoLnPe_jPUkf-g&s"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold'>GJ-16-BN-3378</h4>
          <p className='text-sm text-gray-600 font-sans'>Swift Dzire</p>
        </div>
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
      </div>
    </div>
  );
}

export default WaitingForDriver
