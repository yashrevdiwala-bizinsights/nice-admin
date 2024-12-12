import { useParams } from "react-router"
import useDocumentTitle from "@/components/useDocumentTitle"
import { Breadcrumb } from "@/admin/components/breadcrumb"
// import UserForm from "@/admin/components/user-form"
import HookForm from "../components/hook-form"

const Users = () => {
  const { id } = useParams()
  useDocumentTitle(`Nice Admin - ${id ? "Edit User" : "Add new User"}`)

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>{id ? "Edit User" : "Add new User"}</h1>
        <Breadcrumb
          menu="Master"
          title="Users"
          active={id ? "Edit User" : "Add new User"}
        />
      </div>
      <section className="section">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" />
              <HookForm id={id} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Users
