import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboad";
const App = () => {


const router = createBrowserRouter (
    createRoutesFromElements (
    <Route path="/" element={ <MainLayout/> }>
      <Route index element={ <HomePage/> }/>
      <Route path="/login" element={ <Login/> }/>
      <Route path="/register" element={ <Register/> }/>
      <Route path="/dashboard" element={ <Dashboard/> }/>

    </Route>
  ));


  return (
    <>
          <RouterProvider router={router}/>
    </>
  );
}

export default App;
