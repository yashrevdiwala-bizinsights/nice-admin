import { Link } from "react-router"

/* eslint-disable react/prop-types */
const Navbar = ({ activeTab }) => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link
            className={
              activeTab === "/admin" ? "nav-link" : "nav-link collapsed"
            }
            to="/admin"
          >
            <i className="bi bi-grid-fill"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={
              activeTab === "/admin/profile" ? "nav-link" : "nav-link collapsed"
            }
            to="/admin/profile"
          >
            <i className="bi bi-person-fill"></i>
            <span>Profile</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={
              activeTab === "/admin/faq" ? "nav-link" : "nav-link collapsed"
            }
            to="/admin/faq"
          >
            <i className="bi bi-question-circle-fill"></i>
            <span>F.A.Q</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={
              activeTab === "/admin/contact" ? "nav-link" : "nav-link collapsed"
            }
            to="/admin/contact"
          >
            <i className="bi bi-envelope-fill"></i>
            <span>Contact</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={
              activeTab === "/admin/users" ||
              activeTab === "/admin/users/add" ||
              activeTab === "/admin/users/search"
                ? "nav-link"
                : "nav-link collapsed"
            }
            to="/admin/users"
          >
            <i className="bi bi-people-fill"></i>
            <span>Users</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={
              activeTab === "/admin/excel-upload"
                ? "nav-link"
                : "nav-link collapsed"
            }
            to="/admin/excel-upload"
          >
            <i className="bi bi-file-earmark-spreadsheet-fill"></i>
            <span>Excel Upload</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/multiple-addition">
            <i className="bi bi-person-vcard-fill"></i>
            <span>Multiple Addition</span>
          </Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link collapsed" to="/login">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Login</span>
          </Link>
        </li> */}
      </ul>
    </aside>
  )
}

export default Navbar
