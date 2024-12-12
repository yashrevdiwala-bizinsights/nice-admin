/* eslint-disable react/prop-types */
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import {
  Input,
  Label,
  TextArea,
  Select,
  SelectOption,
  SelectValue,
  Button,
} from "../form-field"
import ErrorMessage from "../error-message"
import { userData } from "@/admin/users/users-data"
import { validationRules } from "@/config/validationRules"

const HookForm = ({ id }) => {
  const navigate = useNavigate()
  const formData = new FormData()
  const user = userData.find((user) => user.id == id)
  const [image, setImage] = useState(user?.image || "")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" })

  const imageUpload = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result.toString())
    }

    reader.readAsDataURL(file)
  }

  const onSubmit = (data) => {
    data.image = image
    formData.append("formData", JSON.stringify(data))
    console.log(JSON.parse(formData.get("formData")))

    setTimeout(() => {
      navigate("/admin/users")
    }, 2000)
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6">
        <div className="form-floating">
          <Input
            className={`form-control`}
            type="text"
            id="floatingName"
            placeholder="Your Name"
            name="name"
            defaultValue={id && user.name}
            {...register("name", validationRules.name)}
          />
          <Label htmlFor="floatingName">Your Name</Label>
        </div>
        {errors?.name && <ErrorMessage errorMsg={errors.name.message} />}
      </div>

      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="number"
            className={`form-control`}
            id="floatingAge"
            placeholder="Your Age"
            defaultValue={id && user.age}
            name="age"
            {...register("age", validationRules.age)}
          />
          <Label htmlFor="floatingAge">Your Age</Label>
        </div>
        {errors?.age && <ErrorMessage errorMsg={errors.age.message} />}
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="email"
            className={`form-control`}
            id="floatingEmail"
            placeholder="Your Email"
            defaultValue={id && user.email}
            name="email"
            {...register("email", validationRules.email)}
          />
          <Label htmlFor="floatingEmail">Your Email</Label>
        </div>
        {errors?.email && <ErrorMessage errorMsg={errors.email.message} />}
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="password"
            className={`form-control`}
            id="floatingPassword"
            placeholder="Password"
            defaultValue={id && user.password}
            name="password"
            {...register("password", validationRules.password)}
          />
          <Label htmlFor="floatingPassword">Password</Label>
        </div>
        {errors?.password && (
          <ErrorMessage errorMsg={errors.password.message} />
        )}
      </div>
      {!image && (
        <div className="col-md-12">
          <div className="form-floating">
            <div className="col-sm-12">
              <Input
                className={`form-control`}
                type="file"
                placeholder="Image Upload"
                id="formFile"
                name="image"
                {...register("image")}
                onChange={imageUpload}
              />
            </div>
          </div>
          {/* {errors?.image && (
            <ErrorMessage errorMsg={errors.image.message} />
          )} */}
        </div>
      )}
      {image && (
        <div className="col-md-6">
          <div className="col-sm-6">
            <img src={image} width="200" alt="Profile" />
            <div className="pt-2">
              <a
                href="#"
                className="btn btn-danger btn-sm"
                title="Delete"
                onClick={() => setImage(() => "")}
              >
                Remove
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
                defaultValue="male"
                {...register("gender", validationRules.gender)}
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
                defaultValue="female"
                {...register("gender", validationRules.gender)}
              />
              <Label className="form-check-label" htmlFor="female">
                Female
              </Label>
            </div>
          </div>
        </fieldset>
        {errors?.gender && <ErrorMessage errorMsg={errors.gender.message} />}
      </div>
      <div className="col-12">
        <div className="form-floating">
          <TextArea
            className={`form-control`}
            placeholder="Address"
            id="floatingTextarea"
            style={{ height: 100 }}
            defaultValue={id && user.address}
            name="address"
            {...register("address", validationRules.address)}
          />
          <Label htmlFor="floatingTextarea">Address</Label>
        </div>
        {errors?.address && <ErrorMessage errorMsg={errors.address.message} />}
      </div>
      <div className="col-md-6">
        <div className="col-md-12">
          <div className="form-floating">
            <Input
              type="text"
              className={`form-control`}
              id="floatingCity"
              placeholder="City"
              name="city"
              defaultValue={id && user.city}
              {...register("city", validationRules.city)}
            />
            <Label htmlFor="floatingCity">City</Label>
          </div>
          {errors?.city && <ErrorMessage errorMsg={errors.city.message} />}
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <Select
            className={`form-select`}
            id="floatingSelect"
            aria-label="State"
            defaultValue={id ? user.state : "select"}
            name="state"
            {...register("state", validationRules.state)}
          >
            <SelectValue value="select">Select State</SelectValue>
            <SelectOption value="New York">New York</SelectOption>
            <SelectOption value="Oregon">Oregon</SelectOption>
            <SelectOption value="DC">DC</SelectOption>
          </Select>
          <Label htmlFor="floatingSelect">State</Label>
        </div>
        {errors?.state && <ErrorMessage errorMsg={errors.state.message} />}
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="text"
            className={`form-control`}
            id="floatingPosition"
            placeholder="Position"
            defaultValue={id && user.position}
            name="position"
            {...register("position", validationRules.position)}
          />
          <Label htmlFor="floatingPosition">Position</Label>
        </div>
        {errors?.position && (
          <ErrorMessage errorMsg={errors.position.message} />
        )}
      </div>
      <div className="col-md-6">
        <div className="form-floating">
          <Input
            type="date"
            className={`form-control`}
            id="floatingStartDate"
            placeholder="Start Date"
            value={id && user.startDate}
            name="startDate"
            {...register("startDate", validationRules.startDate)}
          />
          <Label htmlFor="floatingStartDate">Start Date</Label>
        </div>
        {errors?.startDate && (
          <ErrorMessage errorMsg={errors.startDate.message} />
        )}
      </div>
      <div className="col-md-12">
        <div className="form-floating">
          <div>
            <Label htmlFor="customRange1" className="form-label">
              Salary : {id && user.salary}
            </Label>
            <Input
              type="range"
              min="10000"
              max="100000"
              step="5000"
              className="form-range"
              id="customRange1"
              name="salary"
              defaultValue={id && user.salary}
              onChange={(e) => {
                user.salary = e.target.value
              }}
              {...register("salary", validationRules.salary)}
            />
          </div>
        </div>
      </div>
      {!id && (
        <div className="col-md-12">
          <div>
            <Input
              className="form-check-input"
              name="terms"
              type="checkbox"
              defaultValue
              id="acceptTerms"
              {...register("terms", validationRules.terms)}
            />{" "}
            <Label className="form-check-label" htmlFor="acceptTerms">
              I agree and accept the <a href="#">terms and conditions</a>
            </Label>
          </div>
          {errors?.terms && <ErrorMessage errorMsg={errors.terms.message} />}
        </div>
      )}
      <div className="text-center">
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>{" "}
        <Button
          type="reset"
          className="btn btn-secondary"
          //   onClick={() => handleReset()}
        >
          Clear
        </Button>
      </div>
    </form>
  )
}

export default HookForm
