/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router"
import { userData } from "../../users/users-data"
import {
  Label,
  Input,
  TextArea,
  Select,
  SelectOption,
  SelectValue,
  Button,
} from "../form-field"

const UserForm = ({ id }) => {
  const navigate = useNavigate()
  const user = userData.find((user) => user.id == id)

  const [formData, setFormData] = useState(
    user || {
      name: "",
      position: "",
      age: "",
      email: "",
      password: "",
      image: "",
      gender: "male",
      address: "",
      city: "",
      state: "select",
      startDate: "",
      salary: 10000,
      terms: false,
    }
  )

  const [formControl, setFormControl] = useState({
    name: "",
    position: "",
    age: "",
    email: "",
    password: "",
    image: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    startDate: "",
    salary: "",
    terms: "",
  })

  const handleFileChange = (e) => {
    const files = e.target.files

    if (!files) return

    const blob = new Blob(files, { type: files[0].type })
    blob.name = files[0].name
    blob.lastModifiedDate = files[0].lastModifiedDate

    setFormData({
      ...formData,
      [e.target.accessKey]: URL.createObjectURL(blob),
    })
  }

  const handleChange = (e) => {
    e.target.checked &&
      setFormData({ ...formData, [e.target.accessKey]: e.target.checked })

    setFormData({ ...formData, [e.target.accessKey]: e.target.value })

    e.target.value === ""
      ? setFormControl({ ...formControl, [e.target.accessKey]: "is-invalid" })
      : setFormControl({ ...formControl, [e.target.accessKey]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedFormControl = { ...formControl }

    updatedFormControl.name =
      formData.name === "" ||
      formData.name.length < 3 ||
      formData.name.length > 20
        ? "is-invalid"
        : ""

    updatedFormControl.age =
      formData.age === "" || formData.age < 18 || formData.age > 60
        ? "is-invalid"
        : ""

    updatedFormControl.email =
      formData.email === "" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? "is-invalid"
        : ""

    updatedFormControl.password =
      formData.password === "" ||
      formData.password.length < 8 ||
      formData.password.length > 20
        ? "is-invalid"
        : ""

    updatedFormControl.address =
      formData.address === "" ||
      formData.address.length < 10 ||
      formData.address.length > 100
        ? "is-invalid"
        : ""

    updatedFormControl.city =
      formData.city === "" ||
      formData.city.length < 3 ||
      formData.city.length > 20
        ? "is-invalid"
        : ""

    updatedFormControl.state = formData.state === "select" ? "is-invalid" : ""

    updatedFormControl.position =
      formData.position === "" ||
      formData.position.length < 3 ||
      formData.position.length > 20
        ? "is-invalid"
        : ""

    updatedFormControl.startDate =
      formData.startDate === "" || formData.startDate > new Date().toISOString()
        ? "is-invalid"
        : ""

    updatedFormControl.salary =
      formData.salary < 10000 || formData.salary > 100000 ? "is-invalid" : ""

    updatedFormControl.terms = !formData.terms && "is-invalid"

    setFormControl(updatedFormControl)

    const hasErrors = Object.values(updatedFormControl).some(
      (value) => value === "is-invalid"
    )

    if (!hasErrors) {
      setTimeout(() => {
        console.log("Results: ", formData)
        navigate("/admin/users")
      }, 2000)
    } else {
      console.log("Form has errors")
    }
  }

  const handleReset = () => {
    setFormData({
      name: "",
      position: "",
      age: "",
      email: "",
      password: "",
      gender: "male",
      address: "",
      city: "",
      state: "select",
      startDate: "",
      salary: 10000,
      terms: false,
    })

    setFormControl({
      name: "",
      position: "",
      age: "",
      email: "",
      password: "",
      gender: "",
      image: "",
      address: "",
      city: "",
      state: "",
      startDate: "",
      salary: "",
      terms: "",
    })
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="text"
            className={`form-control ${formControl.name}`}
            id="floatingName"
            placeholder="Your Name"
            defaultValue={id && formData.name}
            accessKey="name"
            onChange={handleChange}
          />
          <Label htmlFor="floatingName">Your Name</Label>
        </div>
        {formControl.name === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Name</div>
        )}
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="number"
            className={`form-control ${formControl.age}`}
            id="floatingAge"
            placeholder="Your Age"
            defaultValue={id && formData.age}
            accessKey="age"
            onChange={handleChange}
          />
          <Label htmlFor="floatingAge">Your Age</Label>
        </div>
        {formControl.age === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Age</div>
        )}
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="email"
            className={`form-control ${formControl.email}`}
            id="floatingEmail"
            placeholder="Your Email"
            defaultValue={id && formData.email}
            accessKey="email"
            onChange={handleChange}
          />
          <Label htmlFor="floatingEmail">Your Email</Label>
        </div>
        {formControl.email === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Email</div>
        )}
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="password"
            className={`form-control ${formControl.password}`}
            id="floatingPassword"
            placeholder="Password"
            defaultValue={id && formData.password}
            accessKey="password"
            onChange={handleChange}
          />
          <Label htmlFor="floatingPassword">Password</Label>
        </div>
        {formControl.password === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Password</div>
        )}
      </div>

      {!formData.image && (
        <div className="col-md-12">
          <div className="form-floating">
            <div className="col-sm-12">
              <Input
                className={`form-control ${formControl.image}`}
                type="file"
                placeholder="Image Upload"
                id="formFile"
                accessKey="image"
                onChange={handleFileChange}
              />
            </div>
          </div>
          {formControl.image === "is-invalid" && (
            <div className="text-danger fs-6 ps-2 pt-1">Invalid Image</div>
          )}
        </div>
      )}

      {formData.image && (
        <div className="col-md-6">
          <div className="col-sm-6">
            <img src={formData.image} width="200" alt="Profile" />
            <div className="pt-2">
              {/* <a
                href="#"
                className="btn btn-primary btn-sm"
                title="Upload new profile image"
              >
                <i className="bi bi-upload" />
              </a>{" "} */}
              <a
                href="#"
                className="btn btn-danger btn-sm"
                title="Delete"
                onClick={() => setFormData({ ...formData, image: "" })}
              >
                Remove
                {/* <i className="bi bi-trash" /> */}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="col-md-8">
        <fieldset className="d-flex">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
          <div className="d-flex gap-3">
            <div className="form-check">
              <Input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                accessKey="gender"
                value="male"
                onChange={handleChange}
                checked={formData.gender === "male"}
              />
              <Label className="form-check-label" htmlFor="male">
                Male
              </Label>
            </div>
            <div className="form-check">
              <Input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                accessKey="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === "female"}
              />
              <Label className="form-check-label" htmlFor="female">
                Female
              </Label>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="col-12">
        <div className="form-floating">
          <TextArea
            className={`form-control ${formControl.address}`}
            placeholder="Address"
            id="floatingTextarea"
            style={{ height: 100 }}
            defaultValue={id && formData.address}
            accessKey="address"
            onChange={handleChange}
          />
          <Label htmlFor="floatingTextarea">Address</Label>
        </div>
        {formControl.address === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Address</div>
        )}
      </div>

      <div className="col-md-6">
        <div className="col-md-12">
          <div className="form-floating">
            <Input
              type="text"
              className={`form-control ${formControl.city}`}
              id="floatingCity"
              placeholder="City"
              defaultValue={id && formData.city}
              accessKey="city"
              onChange={handleChange}
            />
            <Label htmlFor="floatingCity">City</Label>
          </div>
          {formControl.city === "is-invalid" && (
            <div className="text-danger fs-6 ps-2 pt-1">Invalid City</div>
          )}
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Select
            className={`form-select ${formControl.state}`}
            id="floatingSelect"
            aria-label="State"
            defaultValue={id && formData.state}
            accessKey="state"
            onChange={handleChange}
          >
            <SelectValue value="select">Select State</SelectValue>
            <SelectOption value="New York">New York</SelectOption>
            <SelectOption value="Oregon">Oregon</SelectOption>
            <SelectOption value="DC">DC</SelectOption>
          </Select>
          <Label htmlFor="floatingSelect">State</Label>
        </div>
        {formControl.state === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid State</div>
        )}
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="text"
            className={`form-control ${formControl.position}`}
            id="floatingPosition"
            placeholder="Position"
            defaultValue={id && formData.position}
            accessKey="position"
            onChange={handleChange}
          />
          <Label htmlFor="floatingPosition">Position</Label>
        </div>
        {formControl.position === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Position</div>
        )}
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="date"
            className={`form-control ${formControl.startDate}`}
            id="floatingStartDate"
            placeholder="Start Date"
            value={id && formData.startDate}
            accessKey="startDate"
            onChange={handleChange}
          />
          <Label htmlFor="floatingStartDate">Start Date</Label>
        </div>
        {formControl.startDate === "is-invalid" && (
          <div className="text-danger fs-6 ps-2 pt-1">Invalid Start Date</div>
        )}
      </div>

      <div className="col-md-12">
        <div className="form-floating">
          <div>
            <Label htmlFor="customRange1" className="form-label">
              Salary : {formData.salary}
            </Label>
            <Input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              className="form-range"
              id="customRange1"
              accessKey="salary"
              defaultValue={id && formData.salary}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {!id && (
        <div className="col-md-12">
          <Input
            className="form-check-input"
            name="terms"
            type="checkbox"
            defaultValue
            id="acceptTerms"
            accessKey="terms"
            onChange={handleChange}
            required
          />{" "}
          <Label className="form-check-label" htmlFor="acceptTerms">
            I agree and accept the <a href="#">terms and conditions</a>
          </Label>
          {formControl.terms === "is-invalid" && (
            <div className="text-danger fs-6 ps-2 pt-1">
              You must agree before submitting.
            </div>
          )}
        </div>
      )}

      <div className="text-center">
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>{" "}
        <Button
          type="reset"
          className="btn btn-secondary"
          onClick={() => handleReset()}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}

export default UserForm
