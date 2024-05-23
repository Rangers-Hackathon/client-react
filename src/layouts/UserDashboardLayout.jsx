import { Outlet } from 'react-router-dom'
import "../assets/css/acc.css"
import { useEffect } from 'react';

const UserDashboardLayout = () => {

const RemoveStylesheet = () => {
    useEffect(() => {
        const removeStylesheet = () => {
        const stylesheet = document.querySelector('link[rel="stylesheet"][href="../assets/css/style.css"]');
        if (stylesheet) {
            stylesheet.parentNode.removeChild(stylesheet);
        }
        };

        removeStylesheet();
    }, []);
    }

    RemoveStylesheet();
  return (
    <>

    <header id="menu" className="shadowed">
        <div className="title">
            <img src="../assets/img/transp-logo.png" alt=""/>
        </div>

        <nav>
            <ul>
                <li><a href="#" className="nav_link">Home</a></li>
                <li><a href="#" className="nav_link">Register</a></li>
                <li><a href="#" className="nav_link">Features</a></li>
            </ul>
        </nav>

        <a href="#" className="btn btn-primary">Login</a>
    </header>

    <main>

        <div className="sidebar flex-column">
            <div className="container">
                <ul>
                    <li><a href="#" className="nav_link"> <i className="fas fa-home"></i> Dashboard</a></li>
                    <li><a href="#" className="nav_link"> <i className="fas fa-user-cog"></i> Account settings</a></li>
                    <li><a href="#" className="nav_link"> <i className="fas fa-star-half-alt"></i> pending reviews</a></li>
                    <li><a href="#" className="nav_link"> <i className="fas fa-file-medical"></i> Medical history</a></li>
                    <li><a href="#" className="nav_link"> <i className="fas fa-hospital"></i> Find a facility</a></li>
                    <li><a href="#" className="nav_link"> <i className="fas fa-hospital-user"></i> My Referrals</a></li>
                    <li><a href="#" className="nav_link"> <i className="fas fa-sign-out-alt"></i> Logout</a></li>
                </ul>
            </div>
        </div>

        <div className="main-bar">
            <Outlet/>
        </div>

    </main>
    </>
  )
}

export default UserDashboardLayout