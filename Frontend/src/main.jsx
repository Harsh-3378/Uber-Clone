import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx';
import CaptainContext from './context/CaptainContext.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CaptainContext>
        <UserContext>
          <App />
          <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover={false}
            draggable={false}
            theme="colored"
          />
        </UserContext>
      </CaptainContext>
    </BrowserRouter>
  </StrictMode>
);
