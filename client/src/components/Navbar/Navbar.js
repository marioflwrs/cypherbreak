import "./navbar.scss";
import { Search, Comment, Person } from '@material-ui/icons';
import { Link } from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Navbar() {

  const {user} = useContext(AuthContext);
  const PFI = process.env.REACT_APP_PUBLIC_IMAGES;
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
              <Person />
              <span className="topbar-icon-badge"></span>
            </div>
            <div className="topbar-icon-item">
              <Comment />
              <span className="topbar-icon-badge"></span>
            </div>
            <div className="topbar-icon-item">
              <Link to={`/profile/${user.username}`}>
                <img src={user.profilePicture ? PFI + user.profilePicture : PFI + "defaultProfile.jpg"} alt="" className="navbar-image" />
              </Link>
              <span className="topbar-icon-badge"></span>
            </div>
          </div> 
        </div>

      </div>

      <div className="topbar-center">
          <div className="searchbar">
            <Search className="search-icon"/>
            <input placeholder="SEARCH" className="search-input" />
          </div>
        </div>
    </div>
  )
}
