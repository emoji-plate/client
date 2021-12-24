import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import './index.css';

import Home from './pages/Home';
import Discover from './pages/Discover';

import PlateIllustration from "./assets/PlateIllustration";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

function App() {
  return (
    <div>
      <span className="plate-svg-container">
        <PlateIllustration />
      </span>

      <Outlet />
    </div>
  );
}