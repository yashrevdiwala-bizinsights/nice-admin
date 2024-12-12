// import { Link } from "react-router"
import useDocumentTitle from "../../components/useDocumentTitle"
import Form from "../components/form"

const Register = () => {
  useDocumentTitle("Nice Admin - Register")

  return <Form tab="register" />
}

export default Register
