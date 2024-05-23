import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <body>
        <Navbar />
        <Outlet />
    </body>

  )
}

export default MainLayout