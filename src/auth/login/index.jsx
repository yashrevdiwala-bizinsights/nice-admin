import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import LoginForm from "@/auth/components/loginForm"
import useDocumentTitle from "../../components/useDocumentTitle"

const Login = () => {
  useDocumentTitle("Nice Admin - Login")
  const { id } = useSelector((state) => state.admin)
  const navigate = useNavigate()

  useEffect(() => {
    if (id !== "0") {
      navigate("/admin")
    }
  }, [id, navigate])

  if (id !== "0") {
    return null
  }

  return <LoginForm />
}

export default Login
