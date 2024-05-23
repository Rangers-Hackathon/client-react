import React from 'react'

import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'

const ViewTest = () => {
  return (
    <>

    <main>

        <Sidebar />

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
                            <i className="fas fa-microscope"></i>
                            <p>HIV Test</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-calendar"></i>
                            <p>20-12-2024</p>
                        </div>
                        <div className="card">
                            <i className="fas fa-venus-mars"></i>
                            <p>Male</p>
                        </div>


                    </div>
                    <div className="stats">
                        <div className="stats-card positive">
                            <h1 className="txt-red">Positive</h1>
                            <h3>Test Result</h3>
                        </div>

                        <div className="stats-card">
                            <h1>Referred to</h1>
                            <h3>Medicrest medical center</h3>
                        </div>

                        <a href="#" className="btn-primary"> <i className="fas fa-download"></i> Download Result</a>
                    </div>
                </div>
            </div>

        </div>
        </main>

    </>
  )
}

export default ViewTest