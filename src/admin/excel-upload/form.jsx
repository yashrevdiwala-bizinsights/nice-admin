import { useState } from "react"
import Papa from "papaparse"
import ExcelTable from "./table"
import { Input } from "../components/form-field"

const ExcelUploadForm = () => {
  const [excelData, setExcelData] = useState([])

  const handleFileChange = (e) => {
    const file = e.target.files[0]

    if (file.type.split("/")[1] === "csv") {
      Papa.parse(file, {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          setExcelData(result.data)
        },
      })
    }
  }

  return (
    <div>
      {excelData.length < 1 && (
        <div className="col-md-12 pb-4">
          <Input
            type="file"
            className="form-control"
            id="floatingFile"
            placeholder="File"
            name="file"
            onChange={handleFileChange}
          />
        </div>
      )}

      {excelData.length > 0 && (
        <ExcelTable userData={excelData || []} updateExcelData={setExcelData} />
      )}
    </div>
  )
}
export default ExcelUploadForm
