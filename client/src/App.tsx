import { RouterProvider } from "react-router-dom"
import { Element } from "./Routes/Router"

const App = () => {
  return (
    <RouterProvider router={Element}/>
  )
}

export default App