import React, { useContext } from "react";
import Logo from "../../assets/Vector.png";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./navbar.scss";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="links">
          <li className="menu-link">
            <NavLink className="link" to="/">
              <h6>Home</h6>
            </NavLink>
          </li>
          <li className="menu-link">
            <NavLink className="link" to="/about">
              <h6>About</h6>
            </NavLink>
          </li>
          <li className="menu-link">
            <NavLink className="link" to="/contact">
              <h6>Contact</h6>
            </NavLink>
          </li>

          {currentUser ? (
            <>
              <li className="menu-link write">
                <NavLink className="link" to="/writepost">
                  <h6>Write</h6>
                </NavLink>
              </li>
              <li className="menu-link">
                {currentUser?.username}
                <ul className="dropdown-menu">
                  <li className="dropdown-link">Profile</li>
                  <li className="dropdown-link">Settings</li>
                  <li className="dropdown-link" onClick={logout}>
                    <h6> Log Out</h6>
                  </li>
                </ul>
              </li>
            </>
          ) : (
            <li className="menu-link">
              <NavLink to="/login" className="link">
                Log In
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
