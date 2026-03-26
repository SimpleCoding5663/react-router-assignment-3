import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function App() {

  const [apps, setApps] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Load Data
  useEffect(() => {
    fetch("/App.json")
      .then(res => res.json())
      .then(data => {
        setApps(data);
        setFilteredApps(data);
      });
  }, []);

  // Live Search Filter
  useEffect(() => {
    const result = apps.filter(app =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredApps(result);

    if (search.trim() !== "" && result.length === 0) {
      navigate("/error");
    }

  }, [search, apps, navigate]);

  return (
    <section className="trending-apps py-10">

      {/* Heading */}
      <div className="heading text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-950">All Apps</h2>
        <p className="text-xl font-semibold mb-10 text-gray-500">
          Explore All Apps On The Market Developed By Us
        </p>
      </div>

      {/* Count + Search */}
      <div className="w-11/12 mx-auto mb-8 flex flex-col md:flex-row 
      justify-between items-center gap-4">

        <h3 className="text-xl font-semibold text-gray-800">
          Total Apps: {filteredApps.length}
        </h3>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search apps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-full pl-10 focus:border-none outline-gray-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-500"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>

      </div>


      {/* Apps Grid */}
      <div className="w-11/12 mx-auto grid grid-cols-1 
      md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">

        {
          filteredApps.map(app => (
            <Link key={app.id} to={`/app/${app.id}`}>
              <div className="card bg-base-100 shadow-xl 
              hover:scale-105 transition duration-300">

                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-44 md:h-48 lg:h-40 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{app.title}</h2>
                  <p className="text-sm text-gray-500">
                    {app.companyName}
                  </p>

                  <div className="flex justify-between mt-3 text-sm">
                    <span>⭐ {app.ratingAvg}</span>
                    <span>Reviews : {app.reviews}</span>
                  </div>

                </div>
              </div>
            </Link>
          ))
        }

      </div>

    </section>
  );
}