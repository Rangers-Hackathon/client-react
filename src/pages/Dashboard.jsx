import '../assets/css/acc.css';

import { useEffect } from 'react';

const Dashboard = () => {

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

    <div className="main-bar">
        <div className="container">
            <div className="header">
                <h3>Welcome, Sebastian</h3>
            </div>

            <div className="cards-container grid-3">

                <div className="card">
                    <i className="fas fa-clinic-medical"></i>
                    <h3 className="txt-white">Find a facility</h3>
                    <a href="#" className="btn-secondary txt-white">Explore</a>
                </div>

                <div className="card">
                    <i className="fas fa-star"></i>
                    <h3 className="txt-primary">Rate a facility</h3>
                    <a href="#" className="btn-primary">Explore</a>
                </div>

                <div className="card">
                    <i className="fas fa-history"></i>
                    <h3 className="txt-white">My Medical history</h3>
                    <a href="#" className="btn-white">Explore</a>
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

    </>
  );
};

export default Dashboard;
