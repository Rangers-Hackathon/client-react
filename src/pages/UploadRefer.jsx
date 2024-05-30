
import { useEffect } from "react"
import "../assets/css/pharm.css"
import "../assets/css/pharm.module.css"
import Sidebar from '../components/PharmSidebar'

const UploadRefer = () => {

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
            <select>
                <option value="value1" > Test result </option>
                <option value="value1" > Positive </option>
                <option value="value1" > Negative </option>
            </select>

            <select>
                <option value="value1" > Services Needed </option>
                <option value="value1" > PreEP services </option>
                <option value="value1" > PM TCT</option>
            </select>

            <button type="submit" class="btn-primary"><i class="fas fa-plus"></i> Recommend facility  </button>
        </form>

        <div className="flex-column x-start">

            <p style={{marginBottom: "10px"}}> Based on your location, the nearest facility is </p>
            <h1 style={{marginBottom: "10px"}}>Githunguri</h1>
            <a className="btn-primary"> <i className="fas fa-map-marker"></i> Map Directions</a>
        </div>
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