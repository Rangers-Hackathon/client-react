import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/auth.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setError(null);  // Clear previous errors
    setSuccessMessage(null); // Clear previous success message

    try {
      const response = await axios.post("http://102.133.146.44/api/login/", formData);
      console.log("Success!", response.data);
      setSuccessMessage("Login Successful!");
      localStorage.setItem("accessToken", response.data.tokens.access);
      localStorage.setItem("refreshToken", response.data.tokens.refresh);
    } catch (error) {
      console.log("Error during Login!", error.response?.data);
      if (error.response && error.response.data) {
        const firstError = Object.values(error.response.data).flat()[0];
        setError(firstError);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '../assets/css/auth.css';
    document.head.appendChild(stylesheet);

    return () => {
      document.head.removeChild(stylesheet);
    };
  }, []);

  return (
    <>
      <section className="section">
        {error && <p style={{ color: "red" }}>{error}</p>}
        {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <label>Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>

            <label>Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input>

            <button className="btn-primary" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

        <div className="pre">
          <div className="overlay">
            <h1>We are glad to have you back </h1>
            <Link to="/register/" className="btn btn-primary btn-rounded">
              Signup Instead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
