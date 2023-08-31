import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../Components/home";
import Dashboard from "../Components/Dashboard";
import AuthUser from "../Components/AuthUser";
import StudentWebiner from "../Components/webiner/StudentWebiner"
import StudentWebinerEdit from "../Components/webiner/StudentWebinerEdit";
import StudentWebinerView from "../Components/webiner/StudentWebinerView";

function Auth() {
  const { token, logout } = AuthUser();
  const logoutUser = () => {
    if (token != undefined) {
      logout();
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
        <Link className="navbar-brand" to="#">
          IT Academy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mg-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/studentwebiner">
                Webiner Student
              </Link>
            </li>
            <li className="nav-item">
              <span role="button" className="nav-link" onClick={logoutUser}>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studentwebiner" element={<StudentWebiner />} />
          <Route
            path="/studentwebineredit/:id"
            element={<StudentWebinerEdit />}
          />
          <Route
            path="/studentwebinerview/:id"
            element={<StudentWebinerView />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Auth;
