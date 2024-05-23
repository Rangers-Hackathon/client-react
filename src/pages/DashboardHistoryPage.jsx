import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

const DashboardHistoryPage = () => {
  return (
    <>
    <Navbar classname="shadowed" bg="white"/>

    <main className="main-container">

    <Sidebar/>
        <div className="main-bar">
            <div className="container">
                <div className="header">
                    <h3>My Medical History </h3>
                </div>

                <div className="recents">

                    <div className="container">

                        <table>
                            <thead>
                                <th>Test Conducted</th>
                                <th>Result</th>
                                <th>Attended By</th>
                                <th>Referred to</th>
                                <th>Date</th>
                                <th>Document</th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Viral Load</td>
                                    <td>Positive</td>
                                    <td>Dr Sarah Tancredi</td>
                                    <td>Medicrest Center</td>
                                    <td>12/12/2020</td>
                                    <td><a href="#" className="btn-primary"> <i className="fas fa-download"></i> Download</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        </div>

    </main>
    </>
  )
}

export default DashboardHistoryPage