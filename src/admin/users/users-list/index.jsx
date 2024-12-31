import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router"
import db from "@/config/db"
import { Breadcrumb } from "../../components/breadcrumb"
import UserTable from "../../components/user-table"
import { Input, Label } from "../../components/form-field"
import useDocumentTitle from "../../../components/useDocumentTitle"

const UsersList = () => {
  useDocumentTitle("Nice Admin - All Users")

  const [filteredData, setfilteredData] = useState([])
  const navigate = useNavigate()
  const [searchParams] = useSearchParams({})
  const search = searchParams.get("search") || ""

  const fetchData = async () => {
    const result = await db.users.getUsers()

    setfilteredData(() => result.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filterResult = filteredData.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase())
  })

  const handleChange = (e) => {
    if (!e || !e.target) return
    const { value } = e.target
    const params = new URLSearchParams(searchParams)
    params.set("search", value)
    e.key === "Enter" && navigate(`/admin/users/search?${params.toString()}`)
  }

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Users</h1>
        <Breadcrumb menu="Master" title="Users" active="All" />
      </div>
      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="col-md-6">
                  <h5 className="card-title">All Users</h5>
                </div>
                <div className="col-md-2 pt-3">
                  <div className="form-floating">
                    <Input
                      type="text"
                      name="search"
                      className="form-control"
                      id="floatingSearch"
                      placeholder="Search"
                      onKeyDown={handleChange}
                    />
                    <Label htmlFor="floatingName">Search</Label>
                  </div>
                </div>
                <p
                  role="button"
                  className="text-primary d-flex flex-row-reverse"
                  onClick={() => navigate("/admin/users/add")}
                >
                  + Add new
                </p>
                <UserTable userData={filterResult} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default UsersList
