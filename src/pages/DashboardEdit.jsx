
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const DashboardEdit = () => {
  return (
    <>

      <Navbar classname='shadowed' bg="white" />

      <main className='main-container'>

      <Sidebar />


      <div className="main-bar">
            <div className="container">
                <div className="header">
                    <h3>Welcome, Sebastian</h3>
                </div>

                <div className="form-container">
                    <form action="">

                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" name="" id=""   />
                        </div>


                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" name="" id=""   />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="" id=""   />
                        </div>

                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="" id=""/>
                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" name="" id=""/>
                        </div>

                        <div className="form-group">
                            <label>City</label>
                            <input type="text" name="" id=""/>
                        </div>

                        <button type="submit" className="btn-primary">Submit</button>

                    </form>
                </div>

            </div>
        </div>

      </main>

    </>
  );
}

export default DashboardEdit;
