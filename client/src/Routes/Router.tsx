import { Homelayout } from "../components";
import Homepage from "../Pages/Homepage/Homepage";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import DashHomeLauout from "../components/DashboardLayout/DashHomeLauout";
import Properties from "../Pages/Dashboard/Properties/Properties";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
        ]
    },

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Register />
    },

    {
        path: "/dashboard/landlord",
        element: <DashHomeLauout />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            },
            {
                path: "/dashboard/landlord/properties",
                element: <Properties />
            }
        ]
    }
])