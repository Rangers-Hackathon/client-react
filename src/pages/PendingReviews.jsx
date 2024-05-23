import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import "../assets/css/acc.css"

const PendingReviews = () => {
  return (
    <>
    <Navbar classname="shadowed" bg="white"/>
    <main className="main-container">
        <Sidebar/>

        <div className="main-bar">
            <div className="container">
                <div className="header">
                    <h3>My Pending Reviews</h3>
                </div>

                <div className="recents">

                    <div className="container">


                        <table className="table">
                            <thead>
                                <th>Facility Name</th>
                                <th>Phone Number</th>

                                <th>Date </th>
                                <th>Action</th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>08012345678</td>
                                    <td>12/12/2020</td>
                                    <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> review</a></td>
                                </tr>

                                <tr>
                                    <td>John Doe</td>
                                    <td>08012345678</td>
                                    <td>12/12/2020</td>
                                    <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> review</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </div>

        </main>
    </>
  )
}

export default PendingReviews