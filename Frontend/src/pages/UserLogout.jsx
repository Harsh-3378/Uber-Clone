import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const logoutUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.status === 200) {
          localStorage.removeItem("token");
          navigate("/user-login");
        }
      } catch (error) {
        console.log("Logout error:", error);
        localStorage.removeItem("token"); // force logout even if backend fails
        navigate("/user-login");
      }
    };

    logoutUser();
  }, []);

  return <div>Logging out...</div>;
};

export default UserLogout;
