import { ReactElement } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './App.css';

export function App(): ReactElement {
  const location = useLocation();

  return (
    <div className="App">
      <header>
        <h1>Cocktail Wiki</h1>
        <nav>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/search" className={location.pathname === '/search' ? 'active' : ''}>Search</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Cocktail Wiki. All rights reserved.</p>
      </footer>
    </div>
  );
}