import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DashboardEdit from "./pages/DashboardEdit";
import PendingReviews from "./pages/PendingReviews";
import DashboardHistoryPage from "./pages/DashboardHistoryPage";
import Find from "./pages/Find";

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
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
