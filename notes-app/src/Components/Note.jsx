import React from 'react'
import './css/notes.css'

const Note = ({ id, text, title, editHandler, deleteHandler }) => {
  return (
    <div className='note'>
      {title && <div className='note-title'>{title}</div>}
      <div className='note-body'>{text}</div>
      <div className='note-footer' style={{ justifyContent: 'flex-end' }}>
        <button className='note_save' onClick={() => deleteHandler(id)}>Delete</button> &nbsp;
        <button className='note_save' onClick={() => editHandler(id, text, title)}>Edit</button>
      </div>
    </div>
  )
}

export default Note