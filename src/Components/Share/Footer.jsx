import React from 'react'
import { Link } from "react-router"
import logo from "../../assets/logo.png"
export default function Footer() {
  return (
    <footer className="bg-primary-gradient text-gray-200 px-6 py-12">
      <div className="footer-top max-w-7xl mx-auto grid gap-8 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">

        {/* Aside */}
        <aside>
          <Link to="/" className="flex items-center">
            <span className="w-6 h-6 inline-block mr-2">
              <img src={logo} className="w-full h-full object-cover" alt="logo" />
            </span> 
            <span>Hero IO</span>
          </Link>
          <p className="text-base mt-3">
              Discover and download the latest trending mobile and desktop apps in one place. We provide fast, secure and reliable downloads with detailed app reviews and updates.
          </p>
        </aside>

        {/* Company */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Company</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white">About Us</a></li>
            <li><a className="hover:text-white">Careers</a></li>
            <li><a className="hover:text-white">Press & Media</a></li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Services</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white">Trending Apps</a></li>
            <li><a className="hover:text-white">Top Rated Apps</a></li>
            <li><a className="hover:text-white">New Releases</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Support</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white">Help Center</a></li>
            <li><a className="hover:text-white">Privacy Policy</a></li>
            <li><a className="hover:text-white">Terms Of Services</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Follow Us</h6>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <i className="fa-brands fa-x-twitter"></i> @ Hero IO
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-brands fa-instagram"></i> @ Hero IO
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-brands fa-facebook"></i>@ Hero IO
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i> @ Hero IO
            </li>
          </ul>
        </div>

      </div>
      <div className='footer-bottom max-w-7xl mx-auto border-t-2 border-gray-500 mt-20'>
        <div class="text-sm text-center text-gray-200 mt-8">
          @ Hero IO 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
  
}
