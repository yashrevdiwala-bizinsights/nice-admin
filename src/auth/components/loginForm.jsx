import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import ErrorMessage from "@/admin/components/error-message"
import { Input, Label } from "@/admin/components/form-field"
import { validationRules } from "@/config/validationRules"

const LoginForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    navigate("/admin")
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
                        Log In to Your Account
                      </h5>
                      <p className="small text-center">
                        Enter your personal details to log in
                      </p>
                    </div>
                    <form
                      className="row g-3 needs-validation"
                      onSubmit={handleSubmit(onSubmit)}
                    >
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
                          <ErrorMessage errorMsg="Invalid Username" />
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
                          <ErrorMessage errorMsg="Invalid Password" />
                        )}
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            defaultValue="true"
                            id="rememberMe"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </Label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100" type="submit">
                          Login
                        </button>
                      </div>

                      <div className="col-12">
                        <p className="small mb-0">
                          Don&#39;t have account?{" "}
                          <Link to="/register">Create an account</Link>
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

export default LoginForm
