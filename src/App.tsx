import { ReactElement } from 'react';
import { Outlet, Link } from 'react-router-dom';
//import "./App.css";

export function App(): ReactElement {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/search">Search</Link>
      </nav>
      <Outlet />
    </div>
  );
}
