import { Button, Input } from "antd"
import { Breadcrumb } from "../components/breadcrumb"
import { useState } from "react"

const MultipleAddition = () => {
  const [multiData, setMultiData] = useState([{ name: "", email: "", age: "" }])

  const handleAdd = () => {
    setMultiData([...multiData, { name: "", email: "", age: "" }])
  }

  const handleRemove = (index) => {
    const list = [...multiData]
    list.splice(index, 1)
    setMultiData(list)
  }

  return (
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Multiple Addition</h1>
        <Breadcrumb menu="Master" active="Multiple Addition" />
      </div>
      <section className="section">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title" />
              <form
                className="row g-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  console.log(multiData)
                  setMultiData([{ name: "", email: "", age: "" }])
                }}
              >
                <div className="text-end">
                  <Button color="default" variant="text" onClick={handleAdd}>
                    + Add
                  </Button>
                </div>

                {multiData.map((data, index) => (
                  <div key={index} className="row g-3">
                    {index !== 0 && (
                      <hr className="mt-3 mb-3" style={{ width: "100%" }} />
                    )}

                    <div className="col-md-6">
                      <Input
                        size="large"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => {
                          const list = [...multiData]
                          list[index].name = e.target.value
                          setMultiData(list)
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        size="large"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => {
                          const list = [...multiData]
                          list[index].email = e.target.value
                          setMultiData(list)
                        }}
                      />
                    </div>

                    <div className="col-md-6">
                      <Input
                        size="large"
                        placeholder="Age"
                        value={data.age}
                        onChange={(e) => {
                          const list = [...multiData]
                          list[index].age = e.target.value
                          setMultiData(list)
                        }}
                      />
                    </div>

                    {index !== 0 && (
                      <div className="text-end col-md-6">
                        <Button
                          color="danger"
                          variant="text"
                          onClick={() => handleRemove(index)}
                        >
                          - Remove
                        </Button>
                      </div>
                    )}
                  </div>
                ))}

                <div className="text-center pt-3">
                  <Button htmlType="submit" color="default" variant="solid">
                    Submit
                  </Button>{" "}
                  <Button
                    color="danger"
                    variant="solid"
                    onClick={() =>
                      setMultiData([{ name: "", email: "", age: "" }])
                    }
                  >
                    Clear All
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
export default MultipleAddition
