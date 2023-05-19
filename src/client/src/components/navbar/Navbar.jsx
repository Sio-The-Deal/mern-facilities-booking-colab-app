import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>             
        {/* use textDecoration to remove underline */}
          <span className="logo">BookMe</span>
        </Link>
        {/* {!user && ( // if there is no user  ,show this div */}

        {/* //if there is user ,show username ,if not then show login/register button */}
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to={`/login`}>
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
