import "../css/nav.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navBar">
      <Link to="/">Home</Link>
      <div>
        <input type="text" />
        <button>search</button>
      </div>
      <div>population Asc</div>
      <div>population dsc</div>
      <Link to="/add">add new data</Link>
    </nav>
  );
};
