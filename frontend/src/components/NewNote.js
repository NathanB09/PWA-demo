import React, { Component } from 'react';

class NewNote extends Component {

  state = {
    title: '',
    body: ''
  }

  handleTitleOnChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleBodyOnChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { showNewForm, newNote } = this.props
    newNote({ title: e.target.title.value, body: e.target.body.value })
    showNewForm()
  }

  render() {
    const { showNewForm } = this.props
    return (
      <form onSubmit={this.handleSubmit} className="note-editor">
        <input onChange={this.handleTitleOnChange} type="text" name="title" value={this.state.title} />
        <textarea onChange={this.handleBodyOnChange} name="body" value={this.state.body} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button onClick={showNewForm} type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NewNote;
