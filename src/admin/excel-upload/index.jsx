import ExcelUploadForm from "./form"
import { Breadcrumb } from "../components/breadcrumb"
import useDocumentTitle from "@/components/useDocumentTitle"

const ExcelUpload = () => {
  useDocumentTitle("Nice Admin - Excel Upload")

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Excel Upload</h1>
        <Breadcrumb menu="Master" active="Excel Upload" />
      </div>
      <section className="section">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" />
              <ExcelUploadForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default ExcelUpload
