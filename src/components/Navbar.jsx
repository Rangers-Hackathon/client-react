/* eslint-disable react/prop-types */
import logo from '../assets/img/transp-logo.png'
import { Link } from "react-router-dom";
const Navbar = ({classname, bg}) => {

  return (
      <header id="menu" className={classname} style={{background: bg}}>
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