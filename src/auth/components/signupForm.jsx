import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import ErrorMessage from "@/admin/components/error-message"
import { Input, Label } from "@/admin/components/form-field"
import db from "@/config/db"
import { validationRules } from "@/config/validationRules"

const SignupForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const results = await db.admin.create(data)

    results.data.status === 200 ? navigate("/") : console.log("Error")
  }

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <Link
                    to="/"
                    className="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span className="d-none d-lg-block">NiceAdmin</span>
                  </Link>
                </div>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pb-2 pt-4">
                      <h5 className="card-title fs-4 pb-0 text-center">
                        Create an Account
                      </h5>
                      <p className="small text-center">
                        Enter your personal details to create account
                      </p>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="col-12">
                        <Label htmlFor="yourName" className="form-label">
                          Your Name
                        </Label>
                        <Input
                          className="form-control"
                          type="text"
                          name="name"
                          id="yourName"
                          {...register("name", validationRules.name)}
                        />
                        {errors?.name && (
                          <ErrorMessage errorMsg={errors.name.message} />
                        )}
                      </div>
                      <div className="col-12">
                        <Label htmlFor="yourEmail" className="form-label">
                          Your Email
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          className="form-control"
                          id="yourEmail"
                          {...register("email", validationRules.email)}
                        />
                        {errors?.email && (
                          <ErrorMessage errorMsg={errors.email.message} />
                        )}
                      </div>
                      <div className="col-12">
                        <Label htmlFor="yourUsername" className="form-label">
                          Username
                        </Label>
                        <div className="input-group has-validation">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend"
                          >
                            @
                          </span>
                          <Input
                            type="text"
                            name="username"
                            className="form-control"
                            id="yourUsername"
                            {...register("username", validationRules.username)}
                          />
                        </div>
                        {errors?.username && (
                          <ErrorMessage errorMsg={errors.username.message} />
                        )}
                      </div>
                      <div className="col-12">
                        <Label htmlFor="yourPassword" className="form-label">
                          Password
                        </Label>
                        <Input
                          type="password"
                          name="password"
                          className="form-control"
                          id="yourPassword"
                          {...register("password", validationRules.password)}
                        />
                        {errors?.password && (
                          <ErrorMessage errorMsg={errors.password.message} />
                        )}
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            name="terms"
                            type="checkbox"
                            defaultValue
                            id="acceptTerms"
                            {...register("terms", validationRules.terms)}
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="acceptTerms"
                          >
                            I agree and accept the{" "}
                            <a href="#">terms and conditions</a>
                          </Label>
                          {errors?.terms && (
                            <ErrorMessage errorMsg={errors.terms.message} />
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Create Account
                        </button>
                      </div>
                      <div className="col-12">
                        <p className="small mb-0">
                          Already have an account?{" "}
                          <Link to="/login">Log in</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default SignupForm
