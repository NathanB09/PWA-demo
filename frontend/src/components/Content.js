import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';
import NewNote from './NewNote';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    const { changeView, showEditForm, showNewForm, updateNote, newNote } = this.props
    if (changeView.showEditForm) {
      return <NoteEditor note={changeView.note} showEditForm={showEditForm} updateNote={updateNote} />;
    } else if (changeView.showNewForm) {
      return <NewNote showNewForm={showNewForm} newNote={newNote} />;
    } else if (changeView.note) {
      return <NoteViewer note={changeView.note} showEditForm={showEditForm} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
