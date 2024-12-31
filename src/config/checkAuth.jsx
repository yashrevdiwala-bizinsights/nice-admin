/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useNavigate } from "react-router"

const CheckAuth = ({ id, children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (id === "0") {
      navigate("/login")
    }
  }, [id, navigate])

  if (id === "0") {
    return null
  }

  return children
}

export default CheckAuth
