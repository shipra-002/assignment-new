// src/components/CreateNote.js
import React, { useState } from 'react';
import api from '../api';

const CreateNote = () => {
  const [note, setNote] = useState({
    title: '',
    content: '',
    ISBN: '',
    category: '',
    reviews: 0,
    releasedAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/createNotes', note);
      alert('Note created successfully');
    } catch (error) {
      console.error(error);
      alert('Error creating note');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} required />
      <input type="text" name="content" placeholder="Content" value={note.content} onChange={handleChange} required />
      <input type="text" name="ISBN" placeholder="ISBN" value={note.ISBN} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={note.category} onChange={handleChange} required />
      <input type="number" name="reviews" placeholder="Reviews" value={note.reviews} onChange={handleChange} required />
      <input type="date" name="releasedAt" placeholder="Released At" value={note.releasedAt} onChange={handleChange} required />
      <button type="submit">Create Note</button>
    </form>
  );
};

export default CreateNote;
