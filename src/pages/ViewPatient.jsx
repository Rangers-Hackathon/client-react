import React from 'react'
import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'
const ViewPatient = () => {
  return (
    <>

    <main>

    <Sidebar/>

    <div className="main-bar">
        <div className="view-container">
            <div className="title-bar">
                <p className="txt-grey">Patients <span className="txt-grey"> / </span> <span className="txt-primary">Jane Smith</span> </p>
            </div>
            <div className="grid-container">
                <div className="info grid-2">

                    <div className="card">
                        <i className="fas fa-user"></i>
                        <p>Jane Smith</p>
                    </div>
                    <div className="card">
                        <i className="far fa-envelope"></i>
                        <p>janesmith007@gmail.com</p>
                    </div>
                    <div className="card">
                        <i className="fas fa-phone-alt"></i>
                        <p>+254715490412</p>
                    </div>
                    <div className="card">
                        <i className="fas fa-venus-mars"></i>
                        <p>Male</p>
                    </div>


                </div>
                <div className="stats">
                    <div className="stats-card">
                        <h1>0</h1>
                        <h3>Tests Uploaded</h3>
                    </div>

                    <div className="stats-card">
                        <h1>Patient Since</h1>
                        <h3>2022-01-04</h3>
                    </div>
                </div>
            </div>
        </div>


        <div className="recents">
            <div className="container">
                <h3>Recent Tests</h3>


                <table>
                    <thead>
                        <th>Test Name</th>
                        <th>Result</th>
                        <th>Date Added</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>12/12/2020</td>
                            <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                        </tr>

                        <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>12/12/2020</td>
                            <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                        </tr>                            <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>12/12/2020</td>
                            <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                        </tr>                            <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>12/12/2020</td>
                            <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                        </tr>                            <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>12/12/2020</td>
                            <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                        </tr>                            <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>12/12/2020</td>
                            <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                        </tr>                            <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
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

export default ViewPatient