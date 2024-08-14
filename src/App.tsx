import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import './App.css';

export function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; 2024 Cocktail Wiki. All rights reserved.</p>
      </footer>
    </div>
  );
}