import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Online Library</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/books/Fiction">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
