import { useEffect } from "react"
import { useNavigate } from "react-router"

const CheckAuth = (id) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (id === 0) {
      navigate("/login")
    }
  }, [id, navigate])
}

export default CheckAuth
