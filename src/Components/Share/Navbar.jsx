import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>App</a></li>
              <li><a>Installation</a></li>
            </ul>
          </div>
          <Link to="/" className="flex items-center">
            <span className="w-6 h-6 inline-block mr-2">
              <img src={logo} className="w-full h-full object-cover" alt="logo" />
            </span> 
            <span>Hero IO</span>
          </Link>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/app">App</Link></li>
            <li><Link to="/installation">Installation</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/SimpleCoding5663" 
          target="_blank"
          className="btn bg-primary-gradient text-white">
            <i class="fa-brands fa-github"></i>Button</a>
        </div>
      </div>
    </div>
  )
}
