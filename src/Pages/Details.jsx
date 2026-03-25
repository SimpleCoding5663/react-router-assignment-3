import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AppDetails = () => {

  const { id } = useParams();

  const [data, setData] = useState(null);   // ⭐ better state

  useEffect(() => {
    fetch("/App.json")   // ⭐ FIXED (same as other pages)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) return <p className="text-center mt-10">Loading...</p>;

  const app = data.find((item) => item.id === parseInt(id));

  if (!app) return <p className="text-center mt-10">App Not Found</p>;

  const totalRatings = app.ratings.reduce((sum, r) => sum + r.count, 0);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">

      {/* Header */}
      <div className="flex gap-6 items-center">
        <img
          src={app.image}
          alt={app.title}
          className="w-24 h-24 rounded-xl object-cover"
        />

        <div>
          <h1 className="text-2xl font-bold">{app.title}</h1>
          <p className="text-sm text-gray-500">
            Developed by {app.companyName}
          </p>

          <div className="flex gap-6 mt-3 text-sm">
            <div>
              <p className="font-semibold">{app.downloads.toLocaleString()}</p>
              <p className="text-gray-500">Downloads</p>
            </div>

            <div>
              <p className="font-semibold">{app.ratingAvg}</p>
              <p className="text-gray-500">Rating</p>
            </div>

            <div>
              <p className="font-semibold">{app.reviews}</p>
              <p className="text-gray-500">Reviews</p>
            </div>
          </div>

          <button className="btn btn-success mt-4">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="bg-base-200 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        {app.ratings.slice().reverse().map((r, index) => {

          const percentage = (r.count / totalRatings) * 100;

          return (
            <div key={index} className="flex items-center gap-4 mb-2">
              <span className="w-12 text-sm">{r.name}</span>

              <progress
                className="progress progress-warning w-full"
                value={percentage}
                max="100"
              ></progress>

              <span className="text-sm w-12 text-right">
                {r.count}
              </span>
            </div>
          );
        })}
      </div>

      {/* Description */}
      <div className="bg-base-200 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {app.description}
        </p>
      </div>

    </div>
  );
};

export default AppDetails;