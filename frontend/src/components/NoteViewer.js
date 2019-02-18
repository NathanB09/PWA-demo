import React, { Fragment } from 'react';

const NoteViewer = ({ note, showEditForm }) => {
  return (
    <Fragment>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={showEditForm}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
