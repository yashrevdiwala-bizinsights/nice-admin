import LoginForm from "@/auth/components/loginForm"
import useDocumentTitle from "../../components/useDocumentTitle"

const Login = () => {
  useDocumentTitle("Nice Admin - Login")

  return <LoginForm />
}

export default Login
