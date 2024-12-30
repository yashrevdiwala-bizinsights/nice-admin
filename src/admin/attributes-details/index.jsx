import { useSelector } from "react-redux"
import { Breadcrumb } from "../components/breadcrumb"

const AttributesDetails = () => {
  const { size, color, material } = useSelector((state) => state.attributes)

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Attributes Details</h1>
        <Breadcrumb menu="Master" active="Attributes Details" />
      </div>
      <section className="section">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" />
              <div>
                <p>
                  <b>Size:</b> {size}
                </p>
                <p>
                  <b>Color:</b> {color}
                </p>
                <p>
                  <b>Material:</b> {material}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default AttributesDetails
