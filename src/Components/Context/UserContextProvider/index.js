//import React, { useState } from "react";
import UserContext from "../UserContext";
//import axios from 'axios';

const UserContextProvider = ({children}) => {
  // const [info, setInfo] = useState([])
  
  // const getProfile = async () => {
  //   const information = await axios.get('https://pk-be-4p2l.vercel.app/profile');
  //   setInfo(information.data)
  // }

  // getProfile()
  // const [user,setUser] = useState([])
  // const getUser = async () => {
  //   const information = await axios.get('https://pk-be-4p2l.vercel.app/user');
  //   setUser(information.data)
  // }
  // getUser()

    return (<UserContext.Provider value={{       }}>{children}</UserContext.Provider>)
}

export default UserContextProvider