import logo from '../assets/img/transp-logo.png'
const Navbar = () => {
  return (
    <>
      <header id="menu">
        <div className="title">
          <img src={logo} alt="Logo" />
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
    </>
  )
}

export default Navbar