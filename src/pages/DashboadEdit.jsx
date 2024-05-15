import logo from "../../assets/img/transp-logo.png";

const DashboardEdit = () => {
  return (
    <div>
      <header id="menu" className="shadowed">
        <div className="title">
          <img src={logo} alt="" />
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

      <div className="hero">
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
          <div className="container">
            <div className="header">
              <h3>Welcome, Sebastian</h3>
            </div>

            <div className="form-container">
              <form action="">

                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="form-group">
                  <label>Username</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" name="" id="" />
                </div>

                <div className="form-group">
                  <label>City</label>
                  <input type="text" name="" id="" />
                </div>

                <button type="submit" className="btn-primary">Submit</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardEdit;
