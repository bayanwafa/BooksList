import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import './App.css';

function App() {
  // State to manage the list of books
  const [books, setBooks] = useState([]);

  // Function to add a new book to the list
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };



  return (
    <div className="App">
      <h1>My Book List</h1>
      <p>This is a simple React application to manage your book list.</p>

      {/* Pass the addBook function to AddBookForm */}
      <AddBookForm addBook={addBook} />

      {/* Pass the list of books and the addBook function to BookList */}
      <BookList books={books} />
    </div>
  );
}

export default App;
