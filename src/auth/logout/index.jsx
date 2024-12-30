import { useDispatch } from "react-redux"
import { Navigate } from "react-router"
import { setAdminId } from "@/features/adminSlice"

const Logout = () => {
  const dispatch = useDispatch()
  dispatch(setAdminId(0))
  localStorage.setItem("re_d1", 0)

  return <Navigate to="/" replace />
}
export default Logout
