import React from 'react';
import { IoMdCloseCircle  } from "react-icons/io";

function BookList({ books, removeBook }) {

  // Function to handle removing a book
  const handleRemoveBook = (index) => {
    removeBook(index);
  };

  return (
    <div className='books'>
      <h2>Favourite Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title}
            <IoMdCloseCircle  className='removebook' onClick={() => handleRemoveBook(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

