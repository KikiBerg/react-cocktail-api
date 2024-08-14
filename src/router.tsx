import { createBrowserRouter } from "react-router-dom"; 
import { App } from './App';
import { CocktailInfoPage, LandingPage, SearchPage } from './pages';


export const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        children: [
          {
            index: true,
            element: <LandingPage />,
          },
          {
            path: 'search',
            element: <SearchPage />,
          },
          {
            path: 'cocktail/:id',
            element: <CocktailInfoPage />,
          },
        ],
      },
]);