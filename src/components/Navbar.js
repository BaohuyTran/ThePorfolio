import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import DehazeIcon from '@mui/icons-material/Dehaze';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const currentPage = useLocation();

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [currentPage]);

  return (
    <div className="navbar" id={isNavbarOpen ? 'open' : 'close'}>
      <div className="toggleButton">
        <button onClick={() => { setIsNavbarOpen((prev) => !prev) }}>
          <DehazeIcon fontSize="small" />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
      </div>
    </div >
  );
}

export default Navbar;