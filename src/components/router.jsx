/* eslint-disable react/prop-types */
import { BrowserRouter } from "react-router"

const Router = (props) => {
  return <BrowserRouter>{props.children}</BrowserRouter>
}

export default Router
