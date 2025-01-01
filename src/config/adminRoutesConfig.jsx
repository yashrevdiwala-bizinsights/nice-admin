import AdminLayout from "../Layout/admin-layout"
import Dashboard from "../admin/dashboard"
import Profile from "../admin/profile"
import Faq from "../admin/faq"
import Contact from "../admin/contact"
import UsersList from "../admin/users/users-list"
import Users from "../admin/users"
import UsersLayout from "../Layout/users-layout"
import ExcelUpload from "@/admin/excel-upload"
import MultipleAddition from "@/admin/multiple-addition"

const adminRoutesConfig = {
  path: "/admin",
  element: <AdminLayout />,
  children: [
    {
      path: "",
      element: <Dashboard />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "faq",
      element: <Faq />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
    {
      path: "users",
      element: <UsersLayout />,
      children: [
        {
          path: "",
          element: <UsersList />,
        },
        {
          path: "search",
          element: <UsersList />,
        },
        {
          path: "add",
          element: <Users />,
        },
        {
          path: "edit/:id",
          element: <Users />,
        },
      ],
    },
    {
      path: "excel-upload",
      element: <ExcelUpload />,
    },
    {
      path: "multiple-addition",
      element: <MultipleAddition />,
    },
  ],
}

export default adminRoutesConfig
