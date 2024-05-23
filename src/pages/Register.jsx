import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/auth.css";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
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
    setError(null); // Clear previous errors
    setSuccessMessage(null); // Clear previous success message

    try {
      const response = await axios.post("http://102.133.146.44/api/register/", formData);
      console.log("Success!", response.data);
      setSuccessMessage("Registration Successful!");
    } catch (error) {
      console.log("Error during registration!", error.response?.data);
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
    <section className="main">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <div className="pre">
        <div className="overlay">
          <h1>Welcome Aboard! Let's get you started</h1>
          <Link to="/login" className="btn btn-primary btn-rounded">
            Login Instead
          </Link>
        </div>
      </div>
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="input"
          ></input>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input"
          ></input>

          <label>Password:</label>
          <input
            type="password"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            className="input"
          ></input>

          <label>Confirm Password:</label>
          <input
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            className="input"
          ></input>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
}
