import './App.css';
import React, { useState } from 'react';
import BookList from './BookList';

function App() {
  const [books, setBooks] = useState([
    { title: 'Goodbye, Mr Hollywood' },
    { title: 'The Presidents Murderer' },
    { title: 'The Big Picture' },
  ]);


  return (
    <div className="App">
      <h1>My Book List</h1>
      <p>This is a simple React application to manage your book list.</p>

      <BookList books={books} />
    </div>
  );
}

export default App;
