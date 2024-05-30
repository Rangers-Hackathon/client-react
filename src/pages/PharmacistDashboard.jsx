import React from 'react'
import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'
import { useEffect } from 'react'
const PharmacistDashboard = () => {

    useEffect(()=>{
        window.addEventListener('load', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                document.getElementById('location').textContent = "Geolocation is not supported by this browser.";
            }
        });

        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }

        function showError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    document.getElementById('location').textContent = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    document.getElementById('location').textContent = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    document.getElementById('location').textContent = "The request to get user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    document.getElementById('location').textContent = "An unknown error occurred.";
                    break;
            }
        }
    })

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
