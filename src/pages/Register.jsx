import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../assets/css/auth.css";

export default function Register() {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password1: "",
		password2: "",
	});

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
            const response = await axios.post("http://127.0.0.1:8001/api/register/", formData)
            console.log("Success!", response.data)
            setSuccessMessage("Registration Successful!")
        }
        catch(error){
            console.log("Error during registration!", error.response?.data);
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


	useEffect(() => {
		const stylesheet = document.createElement('link');
		stylesheet.rel = 'stylesheet';
		stylesheet.href = '../assets/css/auth.css';
		document.head.appendChild(stylesheet);

		return () => {
		document.head.removeChild(stylesheet);
		};
	}, [])


	return (


			<section className="main">
				{error && <p style={{color:"red"}}>{error}</p>}
            { successMessage && <p style={{color:"green"}}>{successMessage}</p>}


				<div className="pre">
					<div className="overlay">
						<h1>Welcome Aboard Let us get you started </h1>
						<Link to="/login" className="btn btn-primary btn-rounded">Login Instead</Link>
					</div>
				</div>
				<div className="form">
					<h1>Sign Up</h1>
				<form>
					<label>username:</label>
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
					></input>{" "}
					<label>email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					></input>{" "}
					<label>password:</label>
					<input
						type="password"
						name="password1"
						value={formData.password1}
						onChange={handleChange}
					></input>{" "}
					<label>confirm password:</label>
					<input
						type="password"
						name="password2"
						value={formData.password2}
						onChange={handleChange}
					></input>{" "}
					<button type="submit" className="btn-primary"  disabled={isLoading} onClick={handleSubmit}>
						Register
					</button>
			</form>
				</div>
		</section>
	);
}
