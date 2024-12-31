import { useState } from "react"
import { useForm } from "react-hook-form"
import db from "@/config/db"
import { successToast } from "@/config/toast"
import { formatToLocalDate } from "@/config/dateConfig"
import { Button, Input, Label } from "../components/form-field"

/* eslint-disable react/prop-types */
const ExcelTable = ({ userData, updateExcelData }) => {
  const [filteredData, setFilteredData] = useState(userData || [])
  const [editMode, setEditMode] = useState(0)
  const [editData, setEditData] = useState({})

  const { handleSubmit, register, reset } = useForm()

  const removeUser = async (removeId) => {
    if (filteredData.length !== 1) {
      const userResult = filteredData.filter(
        (user) => user.user_id !== removeId
      )

      setFilteredData(userResult)
    }
  }

  const editUser = (userId) => {
    setEditMode(userId)
    setEditData(filteredData.find((user) => user.user_id === userId))
  }

  const handleEditSubmit = (data) => {
    setFilteredData((prevData) => {
      if (!prevData) return []
      return prevData.map((user) => {
        return user.user_id === editMode ? { ...user, ...data } : user
      })
    })

    setEditMode(0)
    setEditData({})
    reset()
  }

  const handleBulkUpload = async (e) => {
    e.preventDefault()
    const result = await db.users.bulkUpload({ data: filteredData })
    console.log(result)
    successToast(result.data.message)
    updateExcelData([])
  }

  return (
    <div>
      {editMode === 0 && (
        <form className="row g-3" onSubmit={handleBulkUpload}>
          <table className="table-borderless datatable table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Age</th>
                <th scope="col">Start Date</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {filteredData
                .filter((user) => user && user.user_id)
                .map((user) => (
                  <tr key={user.user_id}>
                    <th scope="row">{user.user_id}</th>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.age}</td>
                    <td>{formatToLocalDate(user.start_date)}</td>
                    <td>
                      <div className="d-flex flex-row">
                        <i
                          role="button"
                          className="bi bi-pencil-square text-dark p-2"
                          onClick={() => editUser(user.user_id)}
                        />
                        <i
                          role="button"
                          className="bi bi-trash-fill text-danger p-2"
                          onClick={() => removeUser(user.user_id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="text-center">
            <Button type="submit" className="btn btn-primary">
              Upload
            </Button>
          </div>
        </form>
      )}

      {editMode !== 0 && (
        <form className="row g-3" onSubmit={handleSubmit(handleEditSubmit)}>
          <div className="col-md-12">
            <Label htmlFor="floatingName">Name</Label>
            <Input
              type="text"
              className="form-control"
              defaultValue={editData.name}
              {...register("name")}
            />
          </div>
          <div className="col-md-12">
            <Label htmlFor="floatingName">Position</Label>
            <Input
              type="text"
              className="form-control"
              defaultValue={editData.position}
              {...register("position")}
            />
          </div>
          <div className="col-md-12">
            <Label htmlFor="floatingName">Age</Label>
            <Input
              type="number"
              className="form-control"
              defaultValue={editData.age}
              {...register("age")}
            />
          </div>
          <div className="col-md-12">
            <Label htmlFor="floatingName">Start Date</Label>
            <Input
              type="date"
              className="form-control"
              defaultValue={formatToLocalDate(editData.start_date)}
              {...register("start_date")}
            />
          </div>
          <div className="text-center">
            <Button type="submit" className="btn btn-primary">
              Update
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}

export default ExcelTable
