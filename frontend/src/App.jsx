import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";


import Dashboard from "./pages/Dashboard";
import Forum from "./pages/Forum";
import Map from "./pages/Map"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
      {
        path: "/forum",
        element: <Forum />,
      },
      {
        path: "/map",
        element: <Map />
      },
      {
        path: "/map",
        element: <Map />
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
