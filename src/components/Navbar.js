import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon   from '@mui/icons-material/Reorder'
import sound from '../assets/pencil.mp3'
//import ReorderIcon from "@material-ui/icons/Reorder";


function Navbar() {
  function play(){
    new Audio (sound).play()
  }

  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id = {expandNavbar ? "open" : "close"} >
      <div className="toggleButton">
        <button onClick={() => {
            setExpandNavbar((prev)=> !prev);
        }}>
        <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <p>
        <Link to="/" onClick={play}> Saumya </Link>
        </p>
      <div className="pg">
        <h>
        <Link to="/connect" onClick={play}> Connect </Link>
        <Link to="/about" onClick={play}> About  </Link>
        <Link to="/projects" onClick={play}> Projects  </Link>

        </h>
      </div>
      </div>
    </div>
  );
}

export default Navbar;