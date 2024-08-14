import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
//import "./App.css";

export function App(): ReactElement {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
