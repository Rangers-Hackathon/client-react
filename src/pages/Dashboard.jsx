import account from '../assets/css/acc.module.css';
import '../assets/css/acc.module.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [me, setMe] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8001/api/me', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                    },
                });
                setMe(response.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);

            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Redirect to login if no access token is found
    if (localStorage.getItem('accessToken') === null) {
        window.location.href = '/login';
    }


    return (
        <>
            <Navbar classname='shadowed' bg="white" />
            <main className={account.maincontainer}>
                <Sidebar />
                <div className="main-bar">
                    <div className="container">
                        <div className="header">
                            <h3>Welcome, {me?.user?.profile.username || 'User'}</h3>
                        </div>
                        <div className="cards-container grid-3">
                            <div className="card">
                                <i className="fas fa-clinic-medical"></i>
                                <h3 className="txt-white">Find a facility</h3>
                                <Link to="/find" className="btn-secondary txt-white">Explore</Link>
                            </div>
                            <div className="card">
                                <i className="fas fa-star"></i>
                                <h3 className="txt-primary">Rate a facility</h3>
                                <Link to="/dashboard/rate" className="btn-primary">Explore</Link>
                            </div>
                            <div className="card">
                                <i className="fas fa-history"></i>
                                <h3 className="txt-white">My Medical history</h3>
                                <Link to="/dashboard/history" className="btn-white">Explore</Link>
                            </div>
                        </div>
                        <div className="stats-container grid-3">
                            <div className="card">
                                <i className="fas fa-hospital-user"></i>
                                <h3>My Referrals</h3>
                                <p>0</p>
                            </div>
                            <div className="card">
                                <i className="fas fa-user"></i>
                                <h3>My Reviews</h3>
                                <p>0</p>
                            </div>
                            <div className="card">
                                <i className="fas fa-calendar"></i>
                                <h3>My Appointments</h3>
                                <p>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
