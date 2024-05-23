import logo from '../assets/img/transp-logo.png'
import { Link } from "react-router-dom";
// import '../assets/css/style.css';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = '../assets/css/style.css';
    document.head.appendChild(stylesheet);

    return () => {
      document.head.removeChild(stylesheet);
    };
  }, [])
  return (
      <header id="menu">
        <div className="title">
          <img src={logo} alt="Logo" />
        </div>

        <nav>
          <ul>
            <li> <Link to="/" className='nav_link' >Home</Link> </li>
            <li><Link to="/register" className="nav_link"  >Register</Link></li>
            <li><a href="/#features" className="nav_link" >Features</a></li>
          </ul>
        </nav>

        <Link to="/login" className="btn btn-primary">Login</Link>
      </header>
  )
}

export default Navbar