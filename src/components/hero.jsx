/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Link } from "react-router"

const Hero = ({ toggleSidebar, activeTab }) => {
  const [dropdownActive, setDropdownActive] = useState("")

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

      {/* <div className="search-bar">
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div> */}

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <Link className="nav-link nav-icon search-bar-toggle" to="/">
              <i className="bi bi-search"></i>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <a
              className={
                dropdownActive === "notification"
                  ? "nav-link nav-icon show"
                  : "nav-link nav-icon"
              }
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded={dropdownActive === "notification" ? true : false}
              onClick={() => toggleDropdown("notification")}
            >
              <i className="bi bi-bell"></i>
              <span className="badge bg-primary badge-number">4</span>
            </a>

            <ul
              className={
                dropdownActive === "notification"
                  ? "dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications show"
                  : "dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
              }
              style={
                dropdownActive === "notification"
                  ? {
                      position: "absolute",
                      inset: "0px 0px auto auto",
                      margin: "0px",
                      transform: "translate(-25px, 35px)",
                    }
                  : {}
              }
              data-popper-placement={
                dropdownActive === "notification" ? "bottom-end" : undefined
              }
            >
              <li className="dropdown-header">
                You have 4 new notifications
                <a href="#">
                  <span className="badge rounded-pill bg-primary ms-2 p-2">
                    View all
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className={
                dropdownActive === "message"
                  ? "nav-link nav-icon show"
                  : "nav-link nav-icon"
              }
              href="#"
              data-bs-toggle="dropdown"
              aria-expanded={dropdownActive === "message" ? true : false}
              onClick={() => toggleDropdown("message")}
            >
              <i className="bi bi-chat-left-text"></i>
              <span className="badge bg-success badge-number">3</span>
            </a>

            <ul
              className={
                dropdownActive === "message"
                  ? "dropdown-menu dropdown-menu-end dropdown-menu-arrow messages show"
                  : "dropdown-menu dropdown-menu-end dropdown-menu-arrow messages"
              }
              style={
                dropdownActive === "message"
                  ? {
                      position: "absolute",
                      inset: "0px 0px auto auto",
                      margin: "0px",
                      transform: "translate(-25px, 35px)",
                    }
                  : {}
              }
              data-popper-placement={
                dropdownActive === "message" ? "bottom-end" : undefined
              }
            >
              <li className="dropdown-header">
                You have 3 new messages
                <a href="#">
                  <span className="badge rounded-pill bg-primary ms-2 p-2">
                    View all
                  </span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="message-item">
                <a href="#">
                  <img
                    src="/assets/img/messages-1.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="message-item">
                <a href="#">
                  <img
                    src="/assets/img/messages-2.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                  <div>
                    <h4>Anna Nelson</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>6 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="message-item">
                <a href="#">
                  <img
                    src="/assets/img/messages-3.jpg"
                    alt=""
                    className="rounded-circle"
                  />
                  <div>
                    <h4>David Muldon</h4>
                    <p>
                      Velit asperiores et ducimus soluta repudiandae labore
                      officia est ut...
                    </p>
                    <p>8 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li className="dropdown-footer">
                <a href="#">Show all messages</a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown pe-3">
            <a
              className={
                dropdownActive === "profile"
                  ? "nav-link nav-profile d-flex align-items-center show pe-0"
                  : "nav-link nav-profile d-flex align-items-center pe-0"
              }
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
                K. Anderson
              </span>
            </a>

            <ul
              className={
                dropdownActive === "profile"
                  ? "dropdown-menu dropdown-menu-end dropdown-menu-arrow profile show"
                  : "dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
              }
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
                <h6>Kevin Anderson</h6>
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
                  to="/login"
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
