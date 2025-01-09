import "../assets/styles/Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cryptocurrency">Crypto list</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
