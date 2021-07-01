import "./navbar.scss";

export default function Navbar() {
  return (
    <div>
      <div className="topbar-container">
        <div className="topbar-left">
          <span className="logo">CYPHERBREAK</span>
        </div>
        <div className="topbar-center">
          <div className="searchbar">
            <Search />
            <input placeholder="Search for" className="search-input" />
          </div>
        </div>
        <div className="topbar-right"></div>
      </div>
    </div>
  )
}
