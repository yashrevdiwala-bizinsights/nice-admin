import { createBrowserRouter, RouterProvider } from "react-router"
import routesConfig from "./config/routesConfig"

const App = () => {
  const router = createBrowserRouter(routesConfig)

  return <RouterProvider router={router} />
}

export default App
