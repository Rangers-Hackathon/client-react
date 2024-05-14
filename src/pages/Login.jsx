import React, { useState } from "react";
import axios from "axios";
import "../assets/css/auth.css";

export default function Login() {
const [formData, setFormData] = useState({
  email:"",
  password:""
})


const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const [isLoading, setIsLoading] = useState(false);
const [successMessage, setSuccessMessage] = useState(null);
const [error, setError] = useState(null)
const handleSubmit = async (e) => {
  e.preventDefault();
      if(isLoading){
          return
      }

      setIsLoading(true);

      try{
          const response = await axios.post("http://127.0.0.1:8000/api/login/", formData)
          console.log("Success!", response.data)
          setSuccessMessage("Login Successful!")
          localStorage.setItem("accessToken", response.data.tokens.access);
          localStorage.setItem("refreshToken", response.data.tokens.refresh)
      }
      catch(error){
          console.log("Error during Login!", error.response?.data);
          if(error.response && error.response.data){
              Object.keys(error.response.data).forEach(field => {
                  const errorMessages = error.response.data[field];
                  if(errorMessages && errorMessages.length > 0){
                      setError(errorMessages[0]);
                  }
              })
          }
      }
      finally{
          setIsLoading(false)
      }

};

  return (
    <>

      
      <section className="section">

      {error && <p style={{color:"red"}}>{error}</p>}
            { successMessage && <p style={{color:"green"}}>{successMessage}</p>}


        <div className="form">
            <form action="">
                <h1>Login</h1>

                <label>Email</label>
                <input
                className="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                > </input>{" "}
                <label>Password</label>

                <input
                  className="input"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                ></input>{" "}
                <button  className="btn-primary" type="submit" disabled={isLoading} onClick={handleSubmit}>Login</button>
            </form>
        </div>

        <div className="pre">
            <div className="overlay">
                <h1>We are glad to have you back </h1>
                <a href="../signup/" className="btn btn-primary btn-rounded">Signup Instead</a>
            </div>
        </div>

        </section>

		</>
  )
}
