import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardEdit from "./pages/DashboardEdit";
import PendingReviews from "./pages/PendingReviews";
import DashboardHistoryPage from "./pages/DashboardHistoryPage";
import Find from "./pages/Find";
import PharmacistDashboard from "./pages/PharmacistDashboard";
import ViewPatients from "./pages/ViewPatients";
import UploadRefer from "./pages/UploadRefer";
import ViewPatient from "./pages/ViewPatient";
import ViewTest from "./pages/ViewTest";
import Logout from "./pages/Logout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/edit" element={<DashboardEdit/>}/>
        <Route path="/dashboard/reviews" element={<PendingReviews/>}/>
        <Route path="/dashboard/history" element={<DashboardHistoryPage/>}/>
        <Route path="/find" element={<Find/>}/>
        <Route path="/pharmacist" element={<PharmacistDashboard/>}/>
        <Route path="/pharmacist/edit" element={<PharmacistDashboard/>}/>
        <Route path="/pharmacist/patients" element={<ViewPatients/>}/>
        <Route path="/pharmacist/tests" element={<UploadRefer/>}/>
        <Route path="/pharmacist/patient/view" element={<ViewPatient/>}/>
        <Route path="/pharmacist/test/view" element={<ViewTest/>}/>
        <Route path="/logout/" element={<Logout/>}/>

      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
