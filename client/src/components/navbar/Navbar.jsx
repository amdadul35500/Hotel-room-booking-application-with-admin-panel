import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <NavLink to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking</span>
        </NavLink>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <NavLink
              to="/register"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Register</button>
            </NavLink>
            <NavLink
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <button className="navButton">Login</button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
