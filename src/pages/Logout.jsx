import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const Logout = () => {

useEffect( () => {

    const response = axios.post("http://localhost:8001/api/logout/")
    console.log("Success!", response.data);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userName");

    window.location.href = "/login";

    }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout