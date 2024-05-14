import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import '../assets/css/style.css';

const MainLayout = () => {
  return (
    <body>
        <Navbar />
        <Outlet />
    </body>

  )
}

export default MainLayout