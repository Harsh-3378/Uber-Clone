import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import CaptainLogin from "./pages/CaptainLogin.jsx";
import CaptainSignup from "./pages/CaptainSignup.jsx";
import UserHome from "./pages/UserHome.jsx";
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx";
import UserLogout from "./pages/UserLogout.jsx";
import CaptainHome from "./pages/CaptainHome.jsx";
import CaptainLogout from "./pages/CaptainLogout.jsx";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper.jsx";
import Riding from "./pages/Riding.jsx";
import CaptainRiding from "./pages/CaptainRiding.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/user-home"
          element={
            <UserProtectWrapper>
              <UserHome />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user-riding"
          element={
            <UserProtectWrapper>
              <Riding />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain-riding"
          element={
            <CaptainProtectWrapper>
              <CaptainRiding />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
