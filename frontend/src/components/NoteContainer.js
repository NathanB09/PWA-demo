import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';
import API from '../API';

class NoteContainer extends Component {

  state = {
    showEditForm: false,
    showNewForm: false,
    note: null,
    notes: []
  }

  handleViewClick = (note) => {
    this.setState({ note, showEditForm: false })
  }

  showEditForm = () => {
    this.setState({ showEditForm: !this.state.showEditForm })
  }

  showNewForm = () => {
    this.setState({ showNewForm: !this.state.showNewForm })
  }

  updateNote = (note, newTitle, newBody) => {
    API.editNote(note, newTitle, newBody)
    const updatedNotes = [...this.state.notes]
    updatedNotes.map(oldNote => {
      if (oldNote.id === note.id) {
        oldNote.title = newTitle
        oldNote.body = newBody
        return oldNote
      }
    })
    this.setState({ notes: updatedNotes })
  }

  newNote = (note) => {
    API.saveNote(note)
    this.setState({ notes: [...this.state.notes, note] })
  }

  componentDidMount() {
    API.getNotes()
      .then(notes => this.setState({ notes }))
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
            handleClick={this.handleViewClick}
            notes={this.state.notes}
            showNewForm={this.showNewForm} />
          <Content
            changeView={this.state}
            showEditForm={this.showEditForm}
            showNewForm={this.showNewForm}
            updateNote={this.updateNote}
            newNote={this.newNote} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
