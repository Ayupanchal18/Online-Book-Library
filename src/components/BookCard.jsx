import { Link } from "react-router-dom";

const BookCard = ({ book }) => (
    <div className="border p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Rating: {book.rating} ⭐</p>
        <Link to={`/books/${book.id}`} className="text-blue-500">View Details</Link>
    </div>
);

export default BookCard;
