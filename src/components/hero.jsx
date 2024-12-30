/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router"
import db from "@/config/db"
import CheckAuth from "@/config/checkAuth"

const Hero = ({ toggleSidebar, activeTab }) => {
  const { id } = useSelector((state) => state.admin)
  CheckAuth(id)

  const [dropdownActive, setDropdownActive] = useState("")
  const [user, setUser] = useState({})

  const fetchData = async () => {
    const result = await db.admin.userProfile({ admin_id: id })
    setUser(result.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setDropdownActive("")
  }, [activeTab])

  const toggleDropdown = (dropdownType) => {
    setDropdownActive(dropdownActive === dropdownType ? "" : dropdownType)
  }

  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/admin" className="logo d-flex align-items-center">
          <img src="/assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">NiceAdmin</span>
        </Link>
        <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar} />
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <Link className="nav-link nav-icon search-bar-toggle" to="/">
              <i className="bi bi-search"></i>
            </Link>
          </li>

          <li className="nav-item dropdown pe-3">
            <a
              className={`nav-link nav-profile d-flex align-items-center pe-0 ${dropdownActive === "profile" ? "show" : ""}`}
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded={dropdownActive === "profile" ? true : false}
              onClick={() => toggleDropdown("profile")}
            >
              <img
                src="/assets/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                {user?.username || "Admin"}
              </span>
            </a>

            <ul
              className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow profile ${dropdownActive === "profile" ? "show" : ""}`}
              style={
                dropdownActive === "profile"
                  ? {
                      position: "absolute",
                      inset: "0px 0px auto auto",
                      margin: "0px",
                      transform: "translate(-16px, 38px)",
                    }
                  : {}
              }
              data-popper-placement={
                dropdownActive === "profile" ? "bottom-end" : undefined
              }
            >
              <li className="dropdown-header">
                <h6>{user?.name || "Admin"}</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/admin/profile"
                >
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/admin/profile"
                >
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/admin/faq"
                >
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to="/logout"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Hero
