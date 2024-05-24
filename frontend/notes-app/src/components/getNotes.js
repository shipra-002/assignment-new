import React, { useState, useEffect } from 'react';
import api from '../api';

const GetNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await api.get('/getNotes');
        setNotes(response.data.data);
      } catch (error) {
        console.error(error);
        alert('Error fetching notes');
      }
    };

    fetchNotes();
  }, []);

  return (
    <div>
      <h1>Notes</h1>
      {notes.length > 0 ? (
        notes.map(note => (
          <div key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <p>ISBN: {note.ISBN}</p>
            <p>Category: {note.category}</p>
            <p>Reviews: {note.reviews}</p>
            <p>Released At: {note.releasedAt}</p>
          </div>
        ))
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
};

export default GetNotes;
