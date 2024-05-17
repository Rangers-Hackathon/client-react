import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import "../assets/css/auth.css";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const { isLoading, successMessage, error } = auth;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLoading) {
            dispatch(login(formData));
        }
    };

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
                        />

                        <label>Password</label>
                        <input
                            className="input"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />

                        <button
                            className="btn-primary"
                            type="submit"
                            disabled={isLoading}
                        >
                            Login
                        </button>
                    </form>
                </div>

                <div className="pre">
                    <div className="overlay">
                        <h1>We are glad to have you back</h1>
                        <a href="../signup/" className="btn btn-primary btn-rounded">
                            Signup Instead
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
