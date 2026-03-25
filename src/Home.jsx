import hero from "./assets/hero.png"
import google from "./assets/google-play.png"
import app from "./assets/app-store.png"
import './App.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  
  const [apps, setApps] = useState([]);

  useEffect(() => {
  fetch("/App.json")
    .then(res => res.json())
    .then(data => {

      const topRatedApps = data
        .sort((a, b) => b.ratingAvg - a.ratingAvg) // ⭐ sort by rating
        .slice(0, 8); // take top 8

      setApps(topRatedApps);
    });
  }, []);

  return (
    <>
      <section className="w-full">
        <div className="hero-content text-center w-11/12 mx-auto pt-10 flex-col py-10">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">We Build <span className="text-violet-900">Productive</span> Apps</h1>
              <p className="mb-5">
                Download trending and useful apps today.
                Stay productive. Stay connected.Experience technology like never before.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="https://play.google.com/store" 
              target="_blank"
              className="btn bg-primary-gradient text-white 
              flex items-center justify-center gap-1.5 
              px-5 py-7 rounded-xl shadow-lg">
              <img src={google} className="w-10 h-10 object-cover" />
               <span className="text-lg font-semibold tracking-wide">
                Google Play
              </span>
              </a>
              <a href="https://www.apple.com/app-store/" 
              target="_blank"
              className="btn bg-primary-gradient text-white 
              flex items-center justify-center gap-1.5 
              px-5 py-7 rounded-xl shadow-lg">
              <img src={app} className="w-10 h-10 object-cover" />
               <span className="text-lg font-semibold tracking-wide">
                App Store
              </span>
              </a>
            
            </div>
          </div>
          <div className="banner w-11/12 mx-auto">
            <img src={hero} className="block mx-auto max-w-full h-auto" alt="hero" />
          </div>
      </section>
      <section className="bg-primary-gradient py-14">
        <div className="w-11/12 mx-auto">
          <div className="heading text-center">
            <h2 className="text-3xl font-bold text-white mb-20 ">Trusted By Millions, Build For You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white text-center">
            <div className="card">
              <p className="text-lg mb-3">Total Downloads</p>
              <h1 className="text-5xl font-bold mb-4">29.6 M</h1>
              <p className="text-lg">21% More Than Last Month</p>
            </div>
            <div className="card">
              <p className="text-lg mb-3">ToTal Reviews</p>
              <h1 className="text-5xl font-bold mb-4">906 K</h1>
              <p className="text-lg">45% More Than Last Month</p>
            </div>
            <div className="card">
              <p className="text-lg mb-3">Active Apps</p>
              <h1 className="text-5xl font-bold mb-4">132 +</h1>
              <p className="text-lg">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </section>
      <section className="trending-apps py-10">
        <div className="heading text-center">
          <h2 className="text-3xl font-bold mb-4">Trending Apps</h2>
          <p className="text-lg mb-10">
            Explore All Trending Apps On The Market Developed By Us
          </p>
        </div>

        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            apps.map(app => (
              <div key={app.id} className="card bg-base-100 shadow-xl  hover:scale-105 transition duration-300">
                <figure>
                  <img src={app.image} alt={app.title} className="h-48 w-full object-cover"/>
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{app.title}</h2>
                  <p className="text-sm text-gray-500">{app.companyName}</p>

                  <div className="flex justify-between mt-3 text-sm">
                    <span>⭐ {app.ratingAvg}</span>
                    <span>Reviews: {app.reviews}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="show-all text-center  pt-16">
          <Link to="/app" className="btn bg-primary-gradient text-white">Show All</Link>
        </div>
        
      </section>
    </>
  )
}

export default Home;
