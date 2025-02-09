import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books.filter((book) => book.category === category));

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{category} Books</h2>
      {books.map((book) => (
        <div key={book.id} className="border p-4 rounded mb-2">
          <h3 className="text-lg">{book.title} by {book.author}</h3>
          <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BrowseBooks;
