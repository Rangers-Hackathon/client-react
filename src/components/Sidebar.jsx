import { useEffect } from "react";
import { Link } from "react-router-dom"

const Sidebar = () => {

  // Remove all other stylesheets except acc.css
  useEffect(() => {
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(stylesheet => {
    if (stylesheet.getAttribute('href')!== '../assets/css/acc.css') {
      stylesheet.disabled = true;
    }

  })});
  return (

    <div className="sidebar flex-column">
    <div className="container">
        <ul>
            <li><Link to="/dashboard" className="nav_link"> <i className="fas fa-home"></i> Dashboard</Link></li>
            <li><Link to="/dashboard/edit" className="nav_link"> <i className="fas fa-user-cog"></i> Account settings</Link></li>
            <li><Link to="/dashboard/reviews" className="nav_link"> <i className="fas fa-star-half-alt"></i> pending reviews</Link></li>
            <li><Link to="/dashboard/history" className="nav_link"> <i className="fas fa-file-medical"></i> Medical history</Link></li>
            <li><Link to="/find" className="nav_link"> <i className="fas fa-hospital"></i> Find a facility</Link></li>
            <li><Link to="/dashboard" className="nav_link"> <i className="fas fa-hospital-user"></i> My Referrals</Link></li>
            <li><Link to="/logout" className="nav_link"> <i className="fas fa-sign-out-alt"></i> Logout</Link></li>
        </ul>
    </div>
</div>

  )
}

export default Sidebar