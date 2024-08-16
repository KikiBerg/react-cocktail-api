import { ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Header.css';

export function Header(): ReactElement {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Cocktail Wiki</h1>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link
          to="/search"
          className={location.pathname === '/search' ? 'active' : ''}
        >
          Search
        </Link>
        <Link
          to="/random"
          className={location.pathname === '/random' ? 'active' : ''}
        >
          Random Cocktail
        </Link>
        <Link
          to="/favorites"
          className={location.pathname === '/favorites' ? 'active' : ''}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}
