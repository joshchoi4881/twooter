import { Link } from "react-router-dom";
import Address from "./Address";

const Header = () => {
  return (
    <header>
      <Link to="/" className="home-link">
        <div className="header-titles">
          <h1>⚔ twooter ⚔</h1>
          <p>a first person twooter</p>
        </div>
      </Link>
      <Address />
    </header>
  );
};

export default Header;
