import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

/* eslint-disable react/prop-types */
const UserTable = ({ userData }) => {
  const [filteredData, setFilteredData] = useState(userData)

  useEffect(() => {
    setFilteredData([...userData])
  }, [userData])

  const navigate = useNavigate()

  const removeUser = (removeId) => {
    filteredData.length !== 1 &&
      setFilteredData(
        filteredData.filter((data) => {
          return data.id !== removeId
        })
      )
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
          <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.position}</td>
            <td>{user.age}</td>
            <td>{user.startDate}</td>
            <td>
              <div className="d-flex flex-row">
                <i
                  role="button"
                  className="bi bi-pencil-square text-dark p-2"
                  onClick={() => editUser(user.id)}
                />
                <i
                  role="button"
                  className="bi bi-trash-fill text-danger p-2"
                  onClick={() => removeUser(user.id)}
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
