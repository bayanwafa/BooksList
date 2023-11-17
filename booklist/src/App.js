import React, { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';
import './App.css';
import Axios from 'axios';

const url = 'https://6555949984b36e3a431df3ea.mockapi.io/books';


function App() {
  // State to manage the list of books
  const [books, setBooks] = useState([]);

  // Function to fetch all books from the server
  function getAll() {
    Axios.get(url).then((response) => {
      setBooks(response.data);
    })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }

  // Fetch all books when the component mounts
  useEffect(() => {
    getAll();
  }, []);


  // Function to add a new book to the list
  const addBook = (newBook) => {
    // Add a new book to the server
    Axios.post(url, newBook).then((response) => {
      getAll();  // Refresh the book list after adding a new book
    })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };

  // Function to remove a book from the list
  const removeBook = (id) => {
    // Remove the book from the server
    Axios.delete(url + "/" + id)
      .then(() => {
        getAll();  // Refresh the book list after removing a book
      })
      .catch((error) => {
        console.error('Error removing book:', error);
      });
  };

  // Function to edit a book in the list
  const editBook = (id, updatedBook) => {
    // Edit the book on the server
    Axios.put(url + "/" + id, updatedBook).then(() => {
      getAll();  // Refresh the book list after editing a book
    })
      .catch((error) => {
        console.error('Error adding book:', error);
      });
  };



  return (
    <div className="App">
      <h1>My Book List</h1>
      <p>This is a simple React application to manage your book list.</p>

      {/* Pass the addBook function to AddBookForm */}
      <AddBookForm addBook={addBook} />

      {/* Pass the list of books, addBook, removeBook, and editBook functions to BookList */}
      <BookList books={books} removeBook={removeBook} editBook={editBook} />
    </div>
  );
}

export default App;
