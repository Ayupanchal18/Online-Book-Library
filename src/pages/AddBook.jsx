import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [form, setForm] = useState({ title: "", author: "", category: "", description: "", rating: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBook({ id: Date.now(), ...form }));
        navigate("/books/Fiction");
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Add a New Book</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input className="border p-2 w-full" name="title" placeholder="Title" onChange={handleChange} required />
                <input className="border p-2 w-full" name="author" placeholder="Author" onChange={handleChange} required />
                <input className="border p-2 w-full" name="category" placeholder="Category" onChange={handleChange} required />
                <textarea className="border p-2 w-full" name="description" placeholder="Description" onChange={handleChange} required />
                <input className="border p-2 w-full" name="rating" placeholder="Rating" onChange={handleChange} required />
                <button className="bg-blue-500 text-white p-2 rounded">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
