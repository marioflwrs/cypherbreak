import "./navbar.scss";
import { Home, Event } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Navbar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <div className="topbar-container">

        <div className="topbar-left">
          <Link to="/">
            <span className="logo">CYPHERBREAK</span>
          </Link>
        </div>

        <div className="topbar-right">
          <div className="topbar-icons">
            <div className="topbar-icon-item">
              <Link to="/">
                <Home />
              </Link>
              {/* Holding badge as comment until we work on notification logic <span className="topbar-icon-badge"></span> */}
            </div>
            <div className="topbar-icon-item">
              <Link to="/jams">
                <Event />
              </Link>
              {/* <span className="topbar-icon-badge"></span> */}
            </div>
            <div className="topbar-icon-item">
              <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "defaultProfile.jpg"} alt="" className="navbar-image" />
              </Link>
              {/* <span className="topbar-icon-badge"></span> */}
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
