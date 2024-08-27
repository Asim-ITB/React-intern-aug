/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to={"/home"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact us</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
