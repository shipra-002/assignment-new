import React, { useState } from 'react';
import api from '../api';

const UpdateNote = () => {
  const [noteId, setNoteId] = useState('');
  const [note, setNote] = useState({
    title: '',
    content: '',
    ISBN: '',
    releasedAt: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/updateNotes/${noteId}`, note);
      alert('Note updated successfully');
    } catch (error) {
      console.error(error);
      alert('Error updating note');
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input type="text" placeholder="Note ID" value={noteId} onChange={(e) => setNoteId(e.target.value)} required />
      <input type="text" name="title" placeholder="Title" value={note.title} onChange={handleChange} required />
      <input type="text" name="content" placeholder="Content" value={note.content} onChange={handleChange} required />
      <input type="text" name="ISBN" placeholder="ISBN" value={note.ISBN} onChange={handleChange} required />
      <input type="date" name="releasedAt" placeholder="Released At" value={note.releasedAt} onChange={handleChange} required />
      <button type="submit">Update Note</button>
    </form>
  );
};

export default UpdateNote;
