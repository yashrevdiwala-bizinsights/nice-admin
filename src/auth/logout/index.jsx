import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { setAdminId } from "@/features/adminSlice"

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const performLogout = () => {
      localStorage.setItem("re_d1", "0")
      dispatch(setAdminId("0"))
      navigate("/login")
    }

    performLogout()
  }, [dispatch, navigate])

  return null
}
export default Logout
