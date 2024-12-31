/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import db from "@/config/db"
import useDocumentTitle from "../../components/useDocumentTitle"
import { Breadcrumb } from "../components/breadcrumb"
import { Button, Input, Label, TextArea } from "../components/form-field"
import ErrorMessage from "../components/error-message"
import { validationRules } from "@/config/validationRules"

const Profile = () => {
  const [activeProfileTab, setActiveProfileTab] = useState("profile-overview")
  useDocumentTitle("Nice Admin - Profile")

  const { id } = useSelector((state) => state.admin)

  const [user, setUser] = useState({})

  const fetchData = async () => {
    const result = await db.admin.userProfile({ admin_id: id })
    setUser(result.data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handlePasswordChange = async (data) => {
    if (data.newPassword === data.renewPassword) {
      const result = await db.admin.updatePassword({
        admin_id: id,
        password: data.currentPassword,
        new_password: data.newPassword,
      })

      if (result.data.status === 200) {
        alert(result.data.message)
        reset()
      } else {
        alert(result.data.message)
        reset()
      }
    } else {
      alert("Password does not match")
    }
  }

  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Profile</h1>
          <Breadcrumb menu="Master" title="User" active="Profile" />
        </div>
        <section className="section profile">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-body profile-card d-flex flex-column align-items-center pt-4">
                  <img
                    src="/assets/img/profile-img.jpg"
                    alt="Profile"
                    className="rounded-circle"
                  />
                  <h2>{user?.name || "Admin"}</h2>
                  <h3>Web Designer</h3>
                  <div className="social-links mt-2">
                    <a href="#" className="twitter">
                      <i className="bi bi-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bi bi-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bi bi-instagram" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8">
              <div className="card">
                <div className="card-body pt-3">
                  <ul className="nav nav-tabs nav-tabs-bordered">
                    <li
                      className="nav-item"
                      onClick={() => setActiveProfileTab("profile-overview")}
                    >
                      <Button
                        className={
                          activeProfileTab === "profile-overview"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                        aria-expanded={
                          activeProfileTab === "profile-overview" ? true : false
                        }
                        tabIndex={
                          activeProfileTab === "profile-overview"
                            ? undefined
                            : "-1"
                        }
                      >
                        Overview
                      </Button>
                    </li>

                    <li
                      className="nav-item"
                      onClick={() => setActiveProfileTab("profile-edit")}
                    >
                      <Button
                        className={
                          activeProfileTab === "profile-edit"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                        aria-expanded={
                          activeProfileTab === "profile-edit" ? true : false
                        }
                        tabIndex={
                          activeProfileTab === "profile-edit" ? undefined : "-1"
                        }
                      >
                        Edit Profile
                      </Button>
                    </li>

                    <li
                      className="nav-item"
                      onClick={() => setActiveProfileTab("profile-settings")}
                    >
                      <Button
                        className={
                          activeProfileTab === "profile-settings"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-bs-toggle="tab"
                        data-bs-target="#profile-settings"
                        aria-expanded={
                          activeProfileTab === "profile-settings" ? true : false
                        }
                        tabIndex={
                          activeProfileTab === "profile-settings"
                            ? undefined
                            : "-1"
                        }
                      >
                        Settings
                      </Button>
                    </li>

                    <li
                      className="nav-item"
                      onClick={() =>
                        setActiveProfileTab("profile-change-password")
                      }
                    >
                      <Button
                        className={
                          activeProfileTab === "profile-change-password"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        data-bs-toggle="tab"
                        data-bs-target="#profile-change-password"
                        aria-expanded={
                          activeProfileTab === "profile-change-password"
                            ? true
                            : false
                        }
                        tabIndex={
                          activeProfileTab === "profile-change-password"
                            ? undefined
                            : "-1"
                        }
                      >
                        Change Password
                      </Button>
                    </li>
                  </ul>

                  <div className="tab-content pt-2">
                    <div
                      className={
                        activeProfileTab === "profile-overview"
                          ? "tab-pane fade show active profile-overview"
                          : "tab-pane fade profile-overview"
                      }
                      id="profile-overview"
                    >
                      <h5 className="card-title">About</h5>
                      <p className="small fst-italic">
                        Sunt est soluta temporibus accusantium neque nam maiores
                        cumque temporibus. Tempora libero non est unde veniam
                        est qui dolor. Ut sunt iure rerum quae quisquam autem
                        eveniet perspiciatis odit. Fuga sequi sed ea saepe at
                        unde.
                      </p>
                      <h5 className="card-title">Profile Details</h5>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Full Name</div>
                        <div className="col-lg-9 col-md-8">
                          {user?.name || "Admin"}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Company</div>
                        <div className="col-lg-9 col-md-8">
                          Lueilwitz, Wisoky and Leuschke
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Job</div>
                        <div className="col-lg-9 col-md-8">Web Designer</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Country</div>
                        <div className="col-lg-9 col-md-8">USA</div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Address</div>
                        <div className="col-lg-9 col-md-8">
                          A108 Adam Street, New York, NY 535022
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Phone</div>
                        <div className="col-lg-9 col-md-8">
                          (436) 486-3538 x29071
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-3 col-md-4 label">Email</div>
                        <div className="col-lg-9 col-md-8">
                          k.anderson@example.com
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        activeProfileTab === "profile-edit"
                          ? "tab-pane fade profile-edit active show pt-3"
                          : "tab-pane fade profile-edit pt-3"
                      }
                      id="profile-edit"
                    >
                      <form>
                        <div className="row mb-3">
                          <Label
                            htmlFor="profileImage"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Profile Image
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <img
                              src="/assets/img/profile-img.jpg"
                              alt="Profile"
                            />
                            <div className="pt-2">
                              <a
                                href="#"
                                className="btn btn-primary btn-sm"
                                title="Upload new profile image"
                              >
                                <i className="bi bi-upload" />
                              </a>{" "}
                              <a
                                href="#"
                                className="btn btn-danger btn-sm"
                                title="Remove my profile image"
                              >
                                <i className="bi bi-trash" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Full Name
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="fullName"
                              type="text"
                              className="form-control"
                              id="fullName"
                              defaultValue="Kevin Anderson"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="about"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            About
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <TextArea
                              name="about"
                              className="form-control"
                              id="about"
                              style={{ height: "100px" }}
                              defaultValue={
                                "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."
                              }
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="company"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Company
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="company"
                              type="text"
                              className="form-control"
                              id="company"
                              defaultValue="Lueilwitz, Wisoky and Leuschke"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Job"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Job
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="job"
                              type="text"
                              className="form-control"
                              id="Job"
                              defaultValue="Web Designer"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Country"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Country
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="country"
                              type="text"
                              className="form-control"
                              id="Country"
                              defaultValue="USA"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Address"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Address
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="address"
                              type="text"
                              className="form-control"
                              id="Address"
                              defaultValue="A108 Adam Street, New York, NY 535022"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Phone"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Phone
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="phone"
                              type="text"
                              className="form-control"
                              id="Phone"
                              defaultValue="(436) 486-3538 x29071"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Email"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="email"
                              type="email"
                              className="form-control"
                              id="Email"
                              defaultValue="k.anderson@example.com"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Twitter"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Twitter Profile
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="twitter"
                              type="text"
                              className="form-control"
                              id="Twitter"
                              defaultValue="https://twitter.com/#"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Facebook"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Facebook Profile
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="facebook"
                              type="text"
                              className="form-control"
                              id="Facebook"
                              defaultValue="https://facebook.com/#"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Instagram"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Instagram Profile
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="instagram"
                              type="text"
                              className="form-control"
                              id="Instagram"
                              defaultValue="https://instagram.com/#"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <Label
                            htmlFor="Linkedin"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Linkedin Profile
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <Input
                              name="linkedin"
                              type="text"
                              className="form-control"
                              id="Linkedin"
                              defaultValue="https://linkedin.com/#"
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <Button type="submit" className="btn btn-primary">
                            Save Changes
                          </Button>
                        </div>
                      </form>
                    </div>

                    <div
                      className={
                        activeProfileTab === "profile-settings"
                          ? "tab-pane fade profile-settings active show pt-3"
                          : "tab-pane fade profile-settings pt-3"
                      }
                      id="profile-settings"
                    >
                      <form>
                        <div className="row mb-3">
                          <Label
                            htmlFor="fullName"
                            className="col-md-4 col-lg-3 col-form-label"
                          >
                            Email Notifications
                          </Label>
                          <div className="col-md-8 col-lg-9">
                            <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="changesMade"
                                defaultChecked
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="changesMade"
                              >
                                Changes made to your account
                              </Label>
                            </div>
                            <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="newProducts"
                                defaultChecked
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="newProducts"
                              >
                                Information on new products and services
                              </Label>
                            </div>
                            <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="proOffers"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="proOffers"
                              >
                                Marketing and promo offers
                              </Label>
                            </div>
                            <div className="form-check">
                              <Input
                                className="form-check-input"
                                type="checkbox"
                                id="securityNotify"
                                defaultChecked
                                disabled
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="securityNotify"
                              >
                                Security alerts
                              </Label>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <Button type="submit" className="btn btn-primary">
                            Save Changes
                          </Button>
                        </div>
                      </form>
                    </div>

                    <div
                      className={
                        activeProfileTab === "profile-change-password"
                          ? "tab-pane fade profile-change-password active show pt-3"
                          : "tab-pane fade profile-change-password pt-3"
                      }
                      id="profile-change-password"
                    >
                      <form onSubmit={handleSubmit(handlePasswordChange)}>
                        <div className="row mb-3">
                          <div className="col-md-12 col-lg-12">
                            <Input
                              type="password"
                              className="form-control"
                              id="currentPassword"
                              name="currentPassword"
                              placeholder="Current Password"
                              {...register(
                                "currentPassword",
                                validationRules.password
                              )}
                            />
                          </div>
                          {errors?.currentPassword && (
                            <ErrorMessage
                              errorMsg={errors.currentPassword.message}
                            />
                          )}
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-12 col-lg-12">
                            <Input
                              name="newPassword"
                              type="password"
                              className="form-control"
                              id="newPassword"
                              placeholder="New Password"
                              {...register(
                                "newPassword",
                                validationRules.password
                              )}
                            />
                          </div>
                          {errors?.newPassword && (
                            <ErrorMessage
                              errorMsg={errors.newPassword.message}
                            />
                          )}
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-12 col-lg-12">
                            <Input
                              name="renewPassword"
                              type="password"
                              className="form-control"
                              id="renewPassword"
                              placeholder="Confirm New Password"
                              {...register(
                                "renewPassword",
                                validationRules.password
                              )}
                            />
                          </div>
                          {errors?.renewPassword && (
                            <ErrorMessage
                              errorMsg={errors.renewPassword.message}
                            />
                          )}
                        </div>

                        <div className="text-center">
                          <Button type="submit" className="btn btn-primary">
                            Change Password
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Profile
