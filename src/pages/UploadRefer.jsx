
import { useEffect } from "react"
import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'

const UploadRefer = () => {

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
    <div class="modal" id="modal">

        <div class="modal-content">

        <h3 class="txt-primary">Add New Test result</h3>
        <span id="close">&times;</span>
        <form action="">
            <input type="text" placeholder="Full Name"/>
            <input type="text" placeholder="Phone Number"/>
            <input type="text" placeholder="Email Address"/>
            <input type="password" name="" placeholder="password" id=""/>
            <input type="text" list="options" id="myInput" placeholder="Search..."/>
            <datalist id="options">
                <option value="Option 1"/>
                <option value="Option 2"/>
                <option value="Option 3"/>
            </datalist>
            <button type="submit" class="btn-primary"><i class="fas fa-plus"></i> Add  </button>
        </form>

        </div>
    </div>

    <main>
    <Sidebar/>
    <div class="main-bar">
        <div class="mini-bar">
            <h3>Uploads</h3>
            <a href="#" class="btn-primary" id="open"><i class="fas fa-plus"></i> Upload new </a>
        </div>

        <div class="recents">

            <div class="container">

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
                            <td><a href="#" class="btn-primary"> <i class="fas fa-eye"></i> View</a></td>
                        </tr>

                        <tr>
                            <td>John Doe</td>
                            <td>08012345678</td>
                            <td>HIV</td>
                            <td>Positive</td>
                            <td>12/12/2020</td>
                            <td><a href="#" class="btn-primary"> <i class="fas fa-eye"></i> View</a></td>
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

export default UploadRefer