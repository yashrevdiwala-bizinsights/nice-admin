// import { Link } from "react-router"
import useDocumentTitle from "../../components/useDocumentTitle"
import Form from "@/auth/components/form"

const Login = () => {
  useDocumentTitle("Nice Admin - Login")

  return <Form tab="login" />
}

export default Login
