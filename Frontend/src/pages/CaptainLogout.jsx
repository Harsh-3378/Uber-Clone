import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const logoutCaptain = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      } catch (error) {
        console.log("Logout error:", error);
        localStorage.removeItem("token"); // force logout even if backend fails
        navigate("/captain-login");
      }
    };

    logoutCaptain();
  }, []);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
