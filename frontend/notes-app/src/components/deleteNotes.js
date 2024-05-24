import React, { useState } from 'react';
import api from '../api';

const DeleteNote = () => {
  const [noteId, setNoteId] = useState('');

  const handleDelete = async () => {
    try {
      await api.delete(`/deleteNotes/${noteId}`);
      alert('Note deleted successfully');
    } catch (error) {
      console.error(error);
      alert('Error deleting note');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Note ID" value={noteId} onChange={(e) => setNoteId(e.target.value)} required />
      <button onClick={handleDelete}>Delete Note</button>
    </div>
  );
};

export default DeleteNote;
