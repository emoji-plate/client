import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation
} from "react-router-dom";
import './index.css';

// footer component
import Footer from './components/Footer';

import Home from './pages/Home';
import Discover from './pages/Discover';
import Documentation from './pages/Documentation';
import Download from './pages/Download';

const App = () => {
    return (
      <div>
        <Outlet />
        <Footer />
      </div>
    );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={<Home />}
          />
          <Route path="/discover" element={<Discover />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/download" element={<Download />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);