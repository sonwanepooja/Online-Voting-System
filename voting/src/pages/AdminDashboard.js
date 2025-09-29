import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";
import Candidates from "./Candidates";
import Results from "./Results";
import Settings from "./Settings";
import Cookies from "js-cookie";
import "../components/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="logo">Voting Admin</h2>
        <ul className="menu">
          <li>
            <NavLink
              to="/adminDashboard/dashboard"
              className="menu-label"
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "serif",
                fontSize: "21px",
              }}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adminDashboard/user"
              className="menu-label"
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "serif",
                fontSize: "21px",
              }}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adminDashboard/candidates"
              className="menu-label"
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "serif",
                fontSize: "21px",
              }}
            >
              Candidates
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adminDashboard/result"
              className="menu-label"
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "serif",
                fontSize: "21px",
              }}
            >
              Results
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/adminDashboard/setting"
              className="menu-label"
              style={{
                color: "white",
                textDecoration: "none",
                fontFamily: "serif",
                fontSize: "21px",
              }}
            >
              Settings
            </NavLink>
          </li>
        </ul>

        <button
          style={{
            marginTop: "20px",
            width: "90%",
            padding: "10px",
            backgroundColor: "#e63946",
            color: "white",
            fontSize: "18px",
            fontFamily: "serif",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#d62828")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#e63946")
          }

          onClick={() => {
            // Clear auth data and redirect to login
            Cookies.remove("authData");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </aside>

      <main className="content">
        <header className="topbar">
          <h1>Admin Panel</h1>
        </header>

        <section className="dynamic-content">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user" element={<User />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="result" element={<Results />} />
            <Route path="setting" element={<Settings />} />
          </Routes>

          {/* Outlet for nested routes if needed */}
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
