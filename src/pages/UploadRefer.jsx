import { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/pharm.css";
import "../assets/css/pharm.module.css";
import Sidebar from '../components/PharmSidebar';

const UploadRefer = () => {
    const [location, setLocation] = useState(null);
    const [recommendedFacility, setRecommendedFacility] = useState(null);
    const [facilityDetails, setFacilityDetails] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            setLocation({ error: "Geolocation is not supported by this browser." });
        }

        function showPosition(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLocation({ latitude, longitude });
        }

        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setLocation({ error: "User denied the request for Geolocation." });
                    break;
                case error.POSITION_UNAVAILABLE:
                    setLocation({ error: "Location information is unavailable." });
                    break;
                case error.TIMEOUT:
                    setLocation({ error: "The request to get user location timed out." });
                    break;
                case error.UNKNOWN_ERROR:
                    setLocation({ error: "An unknown error occurred." });
                    break;
            }
        }
    }, []);

    useEffect(() => {
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
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const trigger_param = urlParams.get('add');
        if (trigger_param !== null) {
            modal.style.display = 'flex';
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const testResult = event.target.testResult.value;
        const serviceNeeded = event.target.serviceNeeded.value;

        if (location && !location.error) {
            try {
                const response = await axios.get('http://localhost:8001/api/recommend_facility', {
                    params: {
                        latitude: location.latitude,
                        longitude: location.longitude,
                        services: [serviceNeeded]
                    }
                });
                const facility = response.data;
                setRecommendedFacility(facility);

                if (facility && facility.id) {
                    const facilityDetailsResponse = await axios.get(`http://localhost:8001/api/facility/${facility.id}/`);
                    setFacilityDetails(facilityDetailsResponse.data.results);
                }
            } catch (error) {
                setRecommendedFacility({ error: "Unable to fetch recommended facility." });
            }
        } else {
            setRecommendedFacility({ error: "Unable to determine location." });
        }
    };

    return (
        <>
            <div className="modal" id="modal">
                <div className="modal-content">
                    <h3 className="txt-primary">Add New Test result</h3>
                    <span id="close">&times;</span>
                    <form onSubmit={handleSubmit}>
                        <select name="testResult">
                            <option value="Test result">Test result</option>
                            <option value="Positive">Positive</option>
                            <option value="Negative">Negative</option>
                        </select>
                        <select name="serviceNeeded">
                            <option value="Services Needed">Services Needed</option>
                            <option value="PrEP_Services">PrEP services</option>
                            <option value="PMTCT_Services">PMTCT</option>
                            <option value="Care and Treatment services">CARE AND TREATMENT</option>
                        </select>
                        <button type="submit" className="btn-primary">
                            <i className="fas fa-plus"></i> Recommend facility
                        </button>
                    </form>
                    <div className="flex-column x-start">
                        {recommendedFacility && !recommendedFacility.error && (
                            <>
                                <hr />
                                <p style={{ marginBottom: "10px" }}>Based on your Location and service request, the nearest facility is</p>
                                <h3 style={{ marginBottom: "10px" }}>{recommendedFacility.Facility_Name}</h3>
                                { (
                                    <>
                                        <p style={{ marginBottom: "10px" }}><strong> <i className="fas fa-map-marker txt-primary"></i> SubCounty:</strong> {recommendedFacility.SubCounty}</p>
                                        <p style={{ marginBottom: "10px" }}><strong> <i className="fas fa-building txt-primary"></i> Ward Name:</strong> {recommendedFacility.ward_name}</p>
                                        <p style={{ marginBottom: "10px" }}><strong> <i className="fas fa-level-up-alt txt-primary"></i> Level:</strong> {recommendedFacility.Level}</p>
                                    </>
                                )}
                                <a className="btn-primary" href={`https://www.google.com/maps/dir/?api=1&destination=${recommendedFacility.Latitude},${recommendedFacility.Longitude}`} target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-map-marker"></i> Map Directions
                                </a>
                            </>
                        )}
                        {recommendedFacility && recommendedFacility.error && (
                            <p>{recommendedFacility.error}</p>
                        )}
                    </div>
                </div>
            </div>
            <main>
                <Sidebar />
                <div className="main-bar">
                    <div className="mini-bar">
                        <h3>Uploads</h3>
                        <a href="#" className="btn-primary" id="open">
                            <i className="fas fa-plus"></i> Upload new
                        </a>
                    </div>
                    <div className="recents">
                        <div className="container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Patient Name</th>
                                        <th>Phone Number</th>
                                        <th>Test Performed</th>
                                        <th>Results</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>08012345678</td>
                                        <td>HIV</td>
                                        <td>Positive</td>
                                        <td>12/12/2020</td>
                                        <td>
                                            <a href="#" className="btn-primary">
                                                <i className="fas fa-eye"></i> View
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Doe</td>
                                        <td>08012345678</td>
                                        <td>HIV</td>
                                        <td>Positive</td>
                                        <td>12/12/2020</td>
                                        <td>
                                            <a href="#" className="btn-primary">
                                                <i className="fas fa-eye"></i> View
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default UploadRefer;
