
import { useEffect } from "react"
import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'

const ViewPatients = () => {
useEffect(()=>{
    const open = document.getElementById('open');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    })

    // Use url params to open modal
    const urlParams = new URLSearchParams(window.location.search);
    const trigger_param = urlParams.get('add');
    if(trigger_param !== null)
    {
        modal.style.display = 'flex';
    }
    },[])

    return (
    <>
        <div className="modal" id="modal">

            <div className="modal-content">

                <h3 className="txt-primary">Add New User</h3>
                <span id="close">&times;</span>
                <form action="">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Phone Number" />
                    <input type="text" placeholder="Email Address" />
                    <input type="password" name="" placeholder="password" id=""/>
                    <button type="submit" className="btn-primary"><i className="fas fa-plus"></i> Add User </button>
                </form>

            </div>
        </div>

        <main>

        <Sidebar />

        <div className="main-bar">
            <div className="mini-bar">
                <h3>Manage Patients</h3>
                <a href="#" className="btn-primary" id="open"><i className="fas fa-plus"></i> Add new </a>
            </div>

            <div className="recents">

                <div className="container">


                    <table>
                        <thead>
                            <th>Patient Name</th>
                            <th>Phone Number</th>
                            <th>Email Address </th>
                            <th>Gender</th>
                            <th>Date Added</th>
                            <th>Action</th>
                        </thead>

                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>08012345678</td>
                                <td>jdoe39@gmail.com</td>
                                <td>Male</td>
                                <td>12/12/2020</td>
                                <td><a href="#" className="btn-primary"> <i className="fas fa-eye"></i> View</a></td>
                            </tr>

                            <tr>
                                <td>John Doe</td>
                                <td>08012345678</td>
                                <td>jdoe39@gmail.com</td>
                                <td>Male</td>
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

export default ViewPatients