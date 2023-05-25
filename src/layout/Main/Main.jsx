import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Shared/Navbar"
import Footer from "../../Components/Shared/Footer"

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="pt-[80px] min-h-[calc(100vh-355px)]">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Main