import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import SignupForm from "../components/signupForm"
import useDocumentTitle from "../../components/useDocumentTitle"

const Register = () => {
  useDocumentTitle("Nice Admin - Register")

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

  return <SignupForm />
}

export default Register
