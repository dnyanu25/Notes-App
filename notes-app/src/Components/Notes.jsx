// Notes.jsx
import React, { useEffect, useState } from 'react';
import CreateNote from './CreateNote';
import './css/notes.css';
import { v4 as uuid } from 'uuid';
import Note from './Note';

const Notes = () => {
  const [inputText, setInputText] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [notes, setNotes] = useState([]);
  const [editToggle, setEditToggle] = useState(null);

  const editHandler = (id, text, title) => {
    setInputText(text);
    setInputTitle(title || ''); // Handle cases where title might be undefined
    setEditToggle({ id, text, title });
  };

  const saveHandler = () => {
    // 🚨 prevent saving empty notes
    if (!inputText.trim()) {
      return; // do nothing if note is empty
    }

    if (editToggle) {
      // update existing note
      setNotes(notes.map(note =>
        note.id === editToggle.id
          ? { 
              ...note, 
              text: inputText,
              title: inputTitle.trim() || 'Untitled'
            }
          : note
      ));
      setEditToggle(null);
      setInputText("");
      setInputTitle("");
    } else {
      // add new note
      setNotes(prevNotes => [
        ...prevNotes,
        { 
          id: uuid(), 
          text: inputText,
          title: inputTitle.trim() || 'Untitled',
          date: new Date().toLocaleDateString()
        }
      ]);
      setInputText("");
      setInputTitle("");
    }
  };

  const deleteHandler = (id) => {
    setNotes(prevNotes => prevNotes.filter(n => n.id !== id));
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (data) setNotes(data);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='notes'>
      {notes.map(note => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          title={note.title}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      ))}

      <CreateNote
        inputText={inputText}
        setInputText={setInputText}
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        saveHandler={saveHandler}
      />
    </div>
  );
};

export default Notes;