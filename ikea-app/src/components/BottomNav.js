import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMapMarkedAlt, FaBed } from "react-icons/fa";
import "./BottomNav.css";

function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>
        <FaHome size={22} />
        <span>Home</span>
      </Link>

      <Link to="/products" className={location.pathname === "/products" ? "active" : ""}>
        <FaBed size={22} />
        <span>Products</span>
      </Link>

      <Link to="/map" className={location.pathname === "/map" ? "active" : ""}>
        <FaMapMarkedAlt size={22} />
        <span>Map</span>
      </Link>
    </nav>
  );
}

export default BottomNav;



