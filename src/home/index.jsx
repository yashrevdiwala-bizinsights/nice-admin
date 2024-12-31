import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const Home = () => {
  const { id } = useSelector((state) => state.admin)
  const navigate = useNavigate()

  useEffect(() => {
    if (id === "0") {
      navigate("/login")
    } else {
      navigate("/admin")
    }
  }, [id, navigate])

  return null
}
export default Home
