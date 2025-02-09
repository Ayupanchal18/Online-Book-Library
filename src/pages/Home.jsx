import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold">Welcome to the Online Library</h1>
            <p className="mt-4">Explore a variety of book categories and find your next read!</p>
            <Link to="/books/Fiction" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Browse Books
            </Link>
        </div>
    );
};

export default Home;
