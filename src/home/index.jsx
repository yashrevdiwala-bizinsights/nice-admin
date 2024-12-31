import { useSelector } from "react-redux"
import { Navigate } from "react-router"

const Home = () => {
  const { id } = useSelector((state) => state.admin)

  const defaultRoute = id === "0" ? "/login" : "/admin"

  return <Navigate to={defaultRoute} replace />
}
export default Home
