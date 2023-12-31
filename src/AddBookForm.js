import React, { useState } from 'react';

function AddBookForm({ addBook }) {
    // State to manage the input value
    const [newBookTitle, setNewBookTitle] = useState('');

    // Function to handle input change
    const handleInputChange = (e) => {
        setNewBookTitle(e.target.value);
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the input is not empty
        if (newBookTitle.trim() !== '') {
            // Call the addBook function with the new book title
            addBook({ title: newBookTitle });

            // Clear the input field
            setNewBookTitle('');
        }
    };

    return (
        <form className='addbook' onSubmit={handleSubmit}>
            {/* Heading for the form */}
            <h2>Add a Book:</h2>
            {/* Input field for the book title */}
            <input
                type="text"
                id="newBookTitle"
                value={newBookTitle}
                onChange={handleInputChange}
                placeholder="Enter book title"
            />
            {/* Button to submit the form */}
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBookForm;
