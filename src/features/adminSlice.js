import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: localStorage.getItem("re_d1") || 0,
}

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdminId(state, action) {
      state.id = action.payload
    },
  },
})

export const { setAdminId } = adminSlice.actions

export default adminSlice.reducer
