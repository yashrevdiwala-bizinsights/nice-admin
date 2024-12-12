import { useState } from "react"
import { Outlet, useLocation } from "react-router"
import Hero from "../../components/hero"
import Navbar from "../../components/navbar"

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const activeTab = useLocation().pathname

  return (
    <div className={isSidebarOpen ? "" : "toggle-sidebar"}>
      <Hero toggleSidebar={toggleSidebar} activeTab={activeTab} />
      <Navbar activeTab={activeTab} />
      <Outlet />
    </div>
  )
}

export default AdminLayout
