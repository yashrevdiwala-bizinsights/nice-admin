import Home from "@/home"
import Login from "../auth/login"
import Register from "../auth/register"
import Logout from "@/auth/logout"
import PageNotFound from "../components/pagenotfound"
import adminRoutesConfig from "./adminRoutesConfig"

const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  adminRoutesConfig,
  {
    path: "*",
    element: <PageNotFound />,
  },
]

export default routesConfig
