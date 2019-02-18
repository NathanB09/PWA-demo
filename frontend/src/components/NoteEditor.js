import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: this.props.note.title,
    body: this.props.note.body
  }

  handleTitleOnChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleBodyOnChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { note, showEditForm, updateNote } = this.props
    updateNote(note, e.target.title.value, e.target.body.value)
    showEditForm()
  }

  render() {
    const { showEditForm } = this.props
    return (
      <form onSubmit={this.handleSubmit} className="note-editor">
        <input onChange={this.handleTitleOnChange} type="text" name="title" value={this.state.title} />
        <textarea onChange={this.handleBodyOnChange} name="body" value={this.state.body} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={showEditForm} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
