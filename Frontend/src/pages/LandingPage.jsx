import React from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className="h-screen pt-8 flex justify-between flex-col w-full bg-red-400 bg-cover bg-top bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c5310f182519763.652f3606b64b0.jpg')]">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-yellow-50 pb-7 py-4 px-4 ">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <Link to={'/user-login'} className="flex justify-center items-center w-full bg-black text-white py-3 rounded mt-4">
            Continue
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage
