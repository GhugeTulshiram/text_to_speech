import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  // Hide navbar on login & register pages
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar-left">
        <Link to="/home" className="logo">
          🤟 ASL WebApp
        </Link>
      </div>

      {/* NAV LINKS */}
      {token && (
        <div className="navbar-center">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/text-to-sign" className="nav-link">Text → Sign</Link>
          <Link to="/sign-to-text" className="nav-link">Sign → Text</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
        </div>
      )}

      {/* AUTH ACTION */}
      <div className="navbar-right">
        {token ? (
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
