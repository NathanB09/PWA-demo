import React from 'react';

const NoteList = ({ note, handleClick }) => (
  <li onClick={() => handleClick(note)}>
    <h2>{note.title}</h2>
    <p>{note.body.substring(0, 20) + '...'}</p>
  </li>
);

export default NoteList;
