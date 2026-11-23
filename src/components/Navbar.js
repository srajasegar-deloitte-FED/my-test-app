import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
          <span className="brand-text">Gameboxd</span>
        <ul className="navbar__links">
          <li>
            <NavLink to="/" className="navbar__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="navbar__link">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/diary" className="navbar__link">
              Diary
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}