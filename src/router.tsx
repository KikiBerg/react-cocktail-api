import { createBrowserRouter } from "react-router-dom"; 
import { CocktailInfoPage, LandingPage, SearchPage } from './pages';


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <LandingPage/>,
    },
    {
        path: '/search',
        element: <SearchPage/>,
    },
    {
        path: '/cocktail/:id',
        element: <CocktailInfoPage/>,
    },
]);