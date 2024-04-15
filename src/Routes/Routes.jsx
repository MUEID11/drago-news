import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Login from "../Components/Login";

export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: "/career",
                element: <Career/>
            },
            {
                path: '/login',
                element: <Login/>
            }
        ]
    }
])
