import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import EditBookForm from './EditBookForm';

function BookList({ books, removeBook, editBook }) {

  // Function to handle removing a book
  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  const [editingBookId, setEditingBookId] = useState(null);

  const handleEditClick = (bookId) => {
    setEditingBookId(bookId);
  };

  const handleEditComplete = () => {
    setEditingBookId(null);
  };

  return (
    <div className='books'>
      <h2>Favourite Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {editingBookId === book.id ? (
              <EditBookForm
                book={book}
                editBook={editBook}
                onSave={handleEditComplete}
              />
            ) : (
              <>
                {book.title}{' '}
                <div className='buttons'>
                  <MdEdit className='editTitle' onClick={() => handleEditClick(book.id)} />{' '}
                  <IoMdCloseCircle className='removebook' onClick={() => handleRemoveBook(book.id)} />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

