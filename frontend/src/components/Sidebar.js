import React from 'react';
import NoteList from './NoteList';

const Sidebar = ({ notes, handleClick, showNewForm }) => {
  return (
    <div className='master-detail-element sidebar'>
      <NoteList notes={notes} handleClick={handleClick} />
      <button onClick={showNewForm}>New</button>
    </div>
  );
}

export default Sidebar;
