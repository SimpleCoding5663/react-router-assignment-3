
import { Link } from "react-router-dom";
import error from "../assets/error-404.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-lg">
        <figure>
          <img src={error} alt="/" className="h-48 w-full object-cover"/>
        </figure>
        <h2 className="text-2xl font-semibold mb-2">
          Oops, page not found !
        </h2>
        <p className="text-base-content/70 mb-6">
          The page you are looking for is not found.
        </p>
        <Link to="/" className="btn bg-primary-gradient text-white">
          Go Back 
        </Link>
      </div>
    </div>
  );
}