import { Outlet } from "react-router";
import Navbar from "../Components/Share/Navbar.jsx";
import Footer from "../Components/Share/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
    
  )
}
