import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-14 w-14 mx-auto object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf74Cbk7kq6GY5O4Tk-GR5kK9nvTPfJZbX7A&s"
            alt=""
          />
          <h4 className="text-lg font-medium">Harsh Pawar</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">$80</h4>
          <p className="text-sm font-medium text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-3 bg-gray-100 rounded-xl p-2">
        <div className="text-center ">
          <i className="text-2xl mb-2 font-thin  ri-timer-2-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm font-semibold text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm font-semibold text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-2xl mb-2 font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm font-semibold text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails
