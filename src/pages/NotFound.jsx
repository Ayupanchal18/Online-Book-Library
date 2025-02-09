import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h2>404 - Page Not Found</h2>
    <Link to="/" className="text-blue-500">Go to Home</Link>
  </div>
);

export default NotFound;
