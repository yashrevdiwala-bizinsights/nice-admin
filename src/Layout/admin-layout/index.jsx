import { useState } from "react"
import { useSelector } from "react-redux"
import { Outlet, useLocation } from "react-router"
import CheckAuth from "@/config/checkAuth"
import ToastContainer from "@/components/toastContainer"
import Hero from "../../components/hero"
import Navbar from "../../components/navbar"

const AdminLayout = () => {
  const { id } = useSelector((state) => state.admin)

  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const activeTab = useLocation().pathname

  return (
    <CheckAuth id={id}>
      <div className={isSidebarOpen ? "" : "toggle-sidebar"}>
        <Hero toggleSidebar={toggleSidebar} activeTab={activeTab} />
        <Navbar activeTab={activeTab} />
        <ToastContainer />
        <Outlet />
      </div>
    </CheckAuth>
  )
}

export default AdminLayout
