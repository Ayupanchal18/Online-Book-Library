import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [
        { id: 1, title: "1984", author: "George Orwell", category: "Fiction", rating: 4.7 },
        { id: 2, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", rating: 4.8 },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", rating: 4.9 },
        { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", rating: 4.8 },
        { id: 5, title: "Brave New World", author: "Aldous Huxley", category: "Sci-Fi", rating: 4.6 },
        { id: 6, title: "Fahrenheit 451", author: "Ray Bradbury", category: "Sci-Fi", rating: 4.5 },
        { id: 7, title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", rating: 4.4 },
        { id: 8, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", rating: 4.7 },
        { id: 9, title: "Moby Dick", author: "Herman Melville", category: "Fiction", rating: 4.3 },
        { id: 10, title: "War and Peace", author: "Leo Tolstoy", category: "Fiction", rating: 4.8 },
        { id: 11, title: "Pride and Prejudice", author: "Jane Austen", category: "Fiction", rating: 4.9 },
        { id: 12, title: "The Lord of the Rings", author: "J.R.R. Tolkien", category: "Fantasy", rating: 4.9 },
        { id: 13, title: "A Game of Thrones", author: "George R.R. Martin", category: "Fantasy", rating: 4.8 },
        { id: 14, title: "The Name of the Wind", author: "Patrick Rothfuss", category: "Fantasy", rating: 4.7 },
        { id: 15, title: "Dracula", author: "Bram Stoker", category: "Horror", rating: 4.6 },
        { id: 16, title: "Frankenstein", author: "Mary Shelley", category: "Horror", rating: 4.5 },
        { id: 17, title: "The Shining", author: "Stephen King", category: "Horror", rating: 4.8 },
        { id: 18, title: "It", author: "Stephen King", category: "Horror", rating: 4.7 },
        { id: 19, title: "Carrie", author: "Stephen King", category: "Horror", rating: 4.4 },
        { id: 20, title: "The Exorcist", author: "William Peter Blatty", category: "Horror", rating: 4.6 },
        { id: 21, title: "The Road", author: "Cormac McCarthy", category: "Fiction", rating: 4.5 },
        { id: 22, title: "Animal Farm", author: "George Orwell", category: "Fiction", rating: 4.8 },
        { id: 23, title: "The Stand", author: "Stephen King", category: "Horror", rating: 4.7 },
        { id: 24, title: "The Hunger Games", author: "Suzanne Collins", category: "Sci-Fi", rating: 4.6 },
        { id: 25, title: "Catching Fire", author: "Suzanne Collins", category: "Sci-Fi", rating: 4.7 },
        { id: 26, title: "Mockingjay", author: "Suzanne Collins", category: "Sci-Fi", rating: 4.5 },
        { id: 27, title: "Ender's Game", author: "Orson Scott Card", category: "Sci-Fi", rating: 4.8 },
        { id: 28, title: "The Martian", author: "Andy Weir", category: "Sci-Fi", rating: 4.7 },
        { id: 29, title: "Foundation", author: "Isaac Asimov", category: "Sci-Fi", rating: 4.9 },
        { id: 30, title: "Hyperion", author: "Dan Simmons", category: "Sci-Fi", rating: 4.8 },
        { id: 31, title: "Neuromancer", author: "William Gibson", category: "Sci-Fi", rating: 4.6 },
        { id: 32, title: "Snow Crash", author: "Neal Stephenson", category: "Sci-Fi", rating: 4.5 },
        { id: 33, title: "The Left Hand of Darkness", author: "Ursula K. Le Guin", category: "Sci-Fi", rating: 4.7 },
        { id: 34, title: "The Three-Body Problem", author: "Liu Cixin", category: "Sci-Fi", rating: 4.8 },
        { id: 35, title: "Dark Matter", author: "Blake Crouch", category: "Sci-Fi", rating: 4.6 },
        { id: 36, title: "The Midnight Library", author: "Matt Haig", category: "Fiction", rating: 4.5 },
        { id: 37, title: "The Night Circus", author: "Erin Morgenstern", category: "Fantasy", rating: 4.6 },
        { id: 38, title: "The Book Thief", author: "Markus Zusak", category: "Fiction", rating: 4.9 },
        { id: 39, title: "Circe", author: "Madeline Miller", category: "Fantasy", rating: 4.7 },
        { id: 40, title: "The House in the Cerulean Sea", author: "TJ Klune", category: "Fantasy", rating: 4.8 },
        { id: 41, title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", category: "Fiction", rating: 4.9 }
    ],
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
    },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
