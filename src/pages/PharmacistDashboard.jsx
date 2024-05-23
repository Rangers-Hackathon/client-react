import React from 'react'
import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'
const PharmacistDashboard = () => {
  return (
    <>

    <main className='main-dash'>

    <Sidebar />

        <div className="main-bar">
            <div className="sub-menu grid-3">
                <div className="card">
                    <i className="fas fa-users"></i>
                        <h3>Patients Served</h3>
                        <h1>20</h1>


                </div>
                <div className="card">
                    <i className="fas fa-user-plus"></i>
                    <h3>Patients Added</h3>
                    <h1>19</h1>
                </div>
                <div className="card">
                    <i className="fas fa-hospital"></i>
                    <h3>Referrals Made</h3>
                    <h1>10</h1>
                </div>
            </div>

            <div className="recents">

                <div className="container">

                    <h3>Recently Uploaded</h3>

                    <table>
                        <thead>
                            <th>Patient Name</th>
                            <th>Phone Number</th>
                            <th>Test Performed</th>
                            <th>Results</th>
                            <th>Date</th>
                            <th>Action</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>08012345678</td>
                                <td>HIV</td>
                                <td>Positive</td>
                                <td>12/12/2020</td>
                                <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                            </tr>

                            <tr>
                                <td>John Doe</td>
                                <td>08012345678</td>
                                <td>HIV</td>
                                <td>Positive</td>
                                <td>12/12/2020</td>
                                <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    </main>

    </>
  )
}

export default PharmacistDashboard
