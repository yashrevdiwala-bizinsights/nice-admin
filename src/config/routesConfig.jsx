import { Navigate } from "react-router"

import Login from "../auth/login"
import Register from "../auth/register"
import PageNotFound from "../components/pagenotfound"
import adminRoutesConfig from "./adminRoutesConfig"

const routesConfig = [
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
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
