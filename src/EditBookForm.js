import React, { useState } from 'react';

// EditBookForm component for editing book title
const EditBookForm = ({ book, editBook, onSave }) => {
    // State to manage the edited title
    const [editedTitle, setEditedTitle] = useState(book.title);

    // Function to handle input change
    const handleInputChange = (e) => {
        setEditedTitle(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the edited title is not empty
        if (editedTitle.trim() !== '') {
            // Call the editBook function with the updated title
            editBook(book.id, { title: editedTitle });
            // Call the onSave callback to exit the editing mode
            onSave();
        }
    };

    return (
        <form className='editebook' onSubmit={handleSubmit}>
            {/* Input field for editing the book title */}
            <input
                type="text"
                value={editedTitle}
                onChange={handleInputChange}
            />
            {/* Button to save the changes */}
            <button type="submit">Save</button>
        </form>
    );
};

export default EditBookForm;
