import React from 'react';
import './css/notes.css';
const CreateNote = ({ inputText, setInputText, inputTitle, setInputTitle, saveHandler }) => {
   const char = 200;
   const charLimit = char - inputText.length;
   const titleCharLimit = 70; // You can adjust this limit
   const titleCharsLeft = titleCharLimit - (inputTitle?.length || 0);

    return (
        <div className='note '>
            <input 
            
                type="text"
                className="note-title-input"
                placeholder="Note title..."
                value={inputTitle || ''}
                onChange={(e) => setInputTitle(e.target.value)}
                maxLength={titleCharLimit}
            />
            <textarea 
                cols={10} 
                rows={5}
                placeholder='type....'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                maxLength={200}
            ></textarea>
            <div className='note-footer'>
              <span className='label'>{charLimit} left</span>
              <button className='note_saveSave' onClick={saveHandler}  disabled={!inputText.trim()}>Save</button>
            </div>
        </div>
    );
}

export default CreateNote;