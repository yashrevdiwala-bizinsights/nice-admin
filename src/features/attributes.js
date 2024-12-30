import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  color: "000",
  size: "XL",
  material: "",
}

const attributesSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    updateColor(state, action) {
      state.color = action.payload
    },
    updateSize(state, action) {
      state.size = action.payload
    },
    updateMaterial(state, action) {
      state.material = action.payload
    },
  },
})

export const { updateColor, updateSize, updateMaterial } =
  attributesSlice.actions

export default attributesSlice.reducer
