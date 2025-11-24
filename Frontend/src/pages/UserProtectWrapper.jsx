import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import UserDataContext from '../contextData/UserDataContext';
import axios from 'axios';

const UserProtectWrapper = ({children}) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    const {setUser} = useContext(UserDataContext);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if (!token) {
            navigate("/user-login");
        }
        
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setLoading(false);
        }
      })
      .catch(() => {
        navigate("/user-login");
      });
    }, [token, navigate])


    if (loading) {
        return <div>Loading...</div>;
    }

  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
