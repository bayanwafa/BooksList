import React, { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import EditBookForm from './EditBookForm';

function BookList({ books, removeBook, editBook }) {

  // Function to handle removing a book
  const handleRemoveBook = (id) => {
    removeBook(id);
  };

  // State to track the book being edited
  const [editingBookId, setEditingBookId] = useState(null);

  // Function to handle initiating the editing of a book
  const handleEditClick = (bookId) => {
    setEditingBookId(bookId);
  };

  // Function to handle completing the editing of a book
  const handleEditComplete = () => {
    setEditingBookId(null);
  };

  return (
    <div className='books'>
      <h2>Favourite Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {/* Check if the book is being edited */}
            {editingBookId === book.id ? (
              // Display the EditBookForm when editing
              <EditBookForm
                book={book}
                editBook={editBook}
                onSave={handleEditComplete}
              />
            ) : (
              // Display book title and options when not editing
              <>
                {book.title}{' '}
                <div className='buttons'>
                  {/* Edit button to initiate editing */}
                  <MdEdit className='editTitle' onClick={() => handleEditClick(book.id)} />{' '}
                  {/* Remove button to remove the book */}
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

