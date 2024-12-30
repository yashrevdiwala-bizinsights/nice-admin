import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HexColorPicker } from "react-colorful"
import {
  Button,
  Input,
  Label,
  Select,
  SelectOption,
  SelectValue,
} from "../components/form-field"
import { updateColor, updateMaterial, updateSize } from "@/features/attributes"

const AttributesForm = () => {
  const [attributeType, setAttributeType] = useState("")
  const { size, color, material } = useSelector((state) => state.attributes)
  const dispatch = useDispatch()

  return (
    <div>
      <form className="row g-3" onSubmit={() => {}}>
        <div className="col-md-12">
          <div className="form-floating">
            <Select
              className={`form-select`}
              id="floatingSelect"
              aria-label="State"
              defaultValue="select"
              name="state"
              onChange={(e) => {
                setAttributeType(e.target.value)
              }}
            >
              <SelectValue value="select">Select attribute</SelectValue>
              <SelectOption value="size">Size</SelectOption>
              <SelectOption value="color">Color</SelectOption>
              <SelectOption value="material">Material</SelectOption>
            </Select>
            <Label htmlFor="floatingSelect">Attributes</Label>
          </div>
        </div>

        {attributeType === "size" && (
          <div className="col-md-12">
            <div className="form-floating">
              <Input
                className={`form-control`}
                type="text"
                id="floatingTitle"
                placeholder="Title"
                name="title"
                defaultValue={size}
                onChange={(e) => {
                  dispatch(updateSize(e.target.value))
                }}
              />
              <Label htmlFor="floatingTitle">
                {attributeType.toUpperCase()}
              </Label>
            </div>
          </div>
        )}

        {attributeType === "color" && (
          <div className="col-md-3">
            <div
              style={{
                backgroundColor: color,
                marginBottom: 10,
                height: 25,
                width: 50,
                border: "2px solid #000",
                borderWidth: 2,
                borderRadius: 4,
              }}
            />
            <HexColorPicker
              color={color}
              onChange={(e) => dispatch(updateColor(e))}
            />
          </div>
        )}

        {attributeType === "material" && (
          <div className="col-md-12">
            <div className="form-floating">
              <Input
                className={`form-control`}
                type="text"
                id="floatingTitle"
                placeholder="Title"
                name="title"
                defaultValue={material}
                onChange={(e) => {
                  dispatch(updateMaterial(e.target.value))
                }}
              />
              <Label htmlFor="floatingTitle">
                {attributeType.toUpperCase()}
              </Label>
            </div>
          </div>
        )}

        <div className="text-center">
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
export default AttributesForm
