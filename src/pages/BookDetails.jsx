import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((b) => b.id == id));

  return book ? (
    <div className="p-6">
      <h2 className="text-3xl font-bold">{book.title}</h2>
      <p className="text-lg">By {book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>
      <Link to="/books/Fiction" className="text-blue-500">Back to Browse</Link>
    </div>
  ) : (
    <p>Book not found</p>
  );
};

export default BookDetails;
