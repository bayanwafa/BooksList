import React, { useState } from 'react';

const EditBookForm = ({ book, editBook, onSave }) => {
    const [editedTitle, setEditedTitle] = useState(book.title);

    const handleInputChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editedTitle.trim() !== '') {
            editBook(book.id, { title: editedTitle });
            // Call the onSave callback to exit the editing mode
            onSave();
        }
    };

    return (
        <form className='editebook'onSubmit={handleSubmit}>
            <input
                type="text"
                value={editedTitle}
                onChange={handleInputChange}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditBookForm;
