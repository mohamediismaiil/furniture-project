import {createBrowserRouter, useRoutes} from "react-router-dom";
import HomePage from "../pages/HomePage/Home";
import AboutPage from "../pages/AboutPage/AboutPage";

function AppRouting(props: any) {
    return useRoutes([
        {
            path: '/',
            element: <HomePage/>,
        },
        {
            path: 'about',
            element: <AboutPage/>,
        },
    ]);
}

export default AppRouting;
