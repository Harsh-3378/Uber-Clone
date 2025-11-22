import React from 'react'
import { useState } from 'react';
import UserDataContext from '../contextData/UserDataContext';


const UserContext = ({children}) => {

    const [user, setUser] = useState({
        email: '',
        fullname: { 
            firstname: '',
            lastname: '' 
        },
    })
  return (
      <UserDataContext.Provider value={{user, setUser}}>
        {children}
      </UserDataContext.Provider>
  );
}


export default UserContext
