import { configureStore } from "@reduxjs/toolkit"
import attributesReducer from "../features/attributes"
import adminReducer from "../features/adminSlice"

export default configureStore({
  reducer: {
    attributes: attributesReducer,
    admin: adminReducer,
  },
})
