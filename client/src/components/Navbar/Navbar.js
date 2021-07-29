import "./navbar.scss";
import { Search, Comment, Person } from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Navbar() {
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
              <img src="/assets/images/box.JPG" alt="" className="navbar-image" />
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
