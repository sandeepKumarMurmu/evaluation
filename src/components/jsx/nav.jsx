import "../css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>

      <Link to="/add-city">add new data</Link>
      <Link to="/add-country">add new country</Link>
    </nav>
  );
};
