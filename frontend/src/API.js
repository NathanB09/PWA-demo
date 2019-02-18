class API {
  static init = () => {
    this.baseURL = 'http://localhost:3001'
    this.notesURL = this.baseURL + '/api/v1/notes'
    this.editNoteURL = (id) => this.baseURL + `/api/v1/notes/${id}`
  }

  static getNotes = () => {
    return fetch(this.notesURL)
      .then(resp => resp.json())
  }

  static editNote = (note, newTitle, newBody) => {
    fetch(this.editNoteURL(note.id), {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        body: newBody,
        user_id: note.user.id
      })
    })
  }

  static saveNote = (note) => {
    fetch(this.notesURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1
      })
    })
  }

}

API.init()

export default API