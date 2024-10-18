import { Header, Footer } from "../static"
import { Outlet } from "react-router-dom"

const Homelayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Homelayout