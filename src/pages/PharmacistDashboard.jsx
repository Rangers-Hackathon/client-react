import React from 'react'
import "../assets/css/pharm.css"

const PharmacistDashboard = () => {
  return (
    <>

    <main className='main-dash'>

        <div className="side-bar">
            <img src="../assets/img/transp-logo.png" alt=""/>
            <h3>PHARMACIST</h3>

            <ul>
                <li><a href="#"><i className="fas fa-pencil-alt"></i> Edit info </a></li>
                <li><a href="#"> <i className="fas fa-plus"></i> Add Patient</a></li>
                <li><a href="#"><i className="fas fa-user"></i> View Patients </a></li>
                <li><a href="#"><i className="fas fa-upload">  </i> Upload and Refer </a></li>
                <li><a href="#"><i className="fas fa-history"></i>  My Test History</a></li>
                <li><a href="#"><i className="fas fa-sign-out-alt"> </i> Logout </a></li>
            </ul>

        </div>

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
