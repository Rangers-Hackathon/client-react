import React from 'react'
import logo from "../assets/img/transp-logo.png"
import { Link } from 'react-router-dom'

const PharmSidebar = () => {
  return (
    <>

    <div className="side-bar">
            <img src={logo} alt=""/>
            <h3>PHARMACIST</h3>

            <ul>
                <li><Link to="/pharmacist/edit"><i className="fas fa-pencil-alt"></i> Edit info </Link></li>
                <li><Link to="/pharmacist/patients/?add"> <i className="fas fa-plus"></i> Add Patient</Link></li>
                <li><Link to="/pharmacist/patients"><i className="fas fa-user"></i> View Patients </Link></li>
                <li><Link to="/pharmacist/tests?add"><i className="fas fa-upload">  </i> Upload and Refer </Link></li>
                <li><Link to="/pharmacist/tests"><i className="fas fa-history"></i>  My Test History</Link></li>
                <li><Link to="/logout"><i className="fas fa-sign-out-alt"> </i> Logout </Link></li>
            </ul>

        </div>

    </>
  )
}

export default PharmSidebar