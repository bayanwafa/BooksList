import React from 'react';

function BookList ({ books }){

  return (
    <div className='books'>
      <h2>Favourite Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

