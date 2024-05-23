import { Link, Outlet } from "react-router-dom";
import "./sidebar.scss";
import { useState } from "react";
const Sidebar = () => {
  const [active, setActive] = useState(window.location.pathname);
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-2 bg-dark sidebar">
          <div className="sidebar-header">
            <h1 className="text-white">Portal</h1>
          </div>
          <ul className="nav flex-column tabs">
            <li className="nav-item">
              <Link
                to="/dashboard"
                className={`nav-link text-white ${
                  active == "/dashboard" ? "active" : ""
                }`}
                onClick={() => setActive("/dashboard")}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/employee"
                className={`nav-link text-white ${
                  active == "/employee" ? "active" : ""
                }`}
                onClick={() => setActive("/employee")}
              >
                Employees
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className={`nav-link text-white ${
                  active == "/profile" ? "active" : ""
                }`}
                onClick={() => setActive("/profile")}
              >
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/holidays"
                className={`nav-link text-white ${
                  active == "/holidays" ? "active" : ""
                }`}
                onClick={() => setActive("/holidays")}
              >
                Holidays
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/roles"
                className={`nav-link text-white ${
                  active == "/roles" ? "active" : ""
                }`}
                onClick={() => setActive("/roles")}
              >
                Roles
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-10 bg-success content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
