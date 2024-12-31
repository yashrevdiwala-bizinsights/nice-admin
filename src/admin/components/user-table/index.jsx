import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import db from "@/config/db"
import { formatToLocalDate } from "@/config/dateConfig"

/* eslint-disable react/prop-types */
const UserTable = ({ userData }) => {
  const [filteredData, setFilteredData] = useState(userData)

  useEffect(() => {
    setFilteredData([...userData])
  }, [userData])

  const navigate = useNavigate()

  const removeUser = async (removeId) => {
    if (filteredData.length !== 1) {
      const deleteResult = await db.users.deleteUser(removeId)

      const newUserData = await db.users.getUsers()

      const userResult =
        deleteResult.status === 200 ? newUserData.data.data : filteredData

      setFilteredData(userResult)
    }
  }

  const editUser = (userId) => {
    navigate(`/admin/users/edit/${userId}`)
  }

  return (
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
        {filteredData.map((user) => (
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
  )
}

export default UserTable
