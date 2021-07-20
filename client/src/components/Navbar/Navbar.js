import "./navbar.scss";

import boxwon from "../../assets/images/box.JPG";
import { Search, Comment, Person } from '@material-ui/icons';
export default function Navbar() {
  return (
    <div>
      <div className="topbar-container">
      
        <div className="topbar-left">
          <span className="logo">CYPHERBREAK</span>
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
              <img src={boxwon} alt="" className="navbar-image" />
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
