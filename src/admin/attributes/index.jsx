import AttributesForm from "./attributes-form"
import { Breadcrumb } from "../components/breadcrumb"

const Attributes = () => {
  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Attributes</h1>
        <Breadcrumb menu="Master" active="Attributes" />
      </div>
      <section className="section">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" />
              <AttributesForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default Attributes
