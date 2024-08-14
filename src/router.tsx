import { createBrowserRouter } from "react-router-dom"; 
import { LandingPage, SearchPage } from './pages';


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <LandingPage/>,
    },
    {
        path: '/search',
        element: <SearchPage/>,
    },
]);