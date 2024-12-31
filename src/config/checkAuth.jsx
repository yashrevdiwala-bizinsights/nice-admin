import { useEffect } from "react"
import { useNavigate } from "react-router"

const CheckAuth = ({ id, children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!id || id === 0) {
      navigate("/login")
    }
  }, [id, navigate])

  return children
}

export default CheckAuth
