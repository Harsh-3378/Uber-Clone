import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CaptainDataContext from "../contextData/CaptainDataContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {setCaptain} = useContext(CaptainDataContext);
  

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
  }, [token, navigate]);

  axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if(res.status === 200){
        setCaptain(res.data.captain);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.log("Error fetching captain data:", error);
      setIsLoading(false);
      navigate("/captain-login");
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectWrapper;