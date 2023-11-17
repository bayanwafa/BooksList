import React from 'react';
import { IoMdCloseCircle } from "react-icons/io";

function BookList({ books, removeBook }) {

  // Function to handle removing a book
  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  return (
    <div className='books'>
      <h2>Favourite Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{' '}
            <IoMdCloseCircle className='removebook' onClick={() => handleRemoveBook(book.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

