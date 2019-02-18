import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, handleClick }) => {
  return (
    <ul>
      {notes.map(note => <NoteItem handleClick={handleClick} key={note.id} note={note} />)}
    </ul>
  );
}

export default NoteList;
