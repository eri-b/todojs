class Project {
  constructor (title) {
    this.title = title
  }

  get title () {
    return this._title
  }

  set title (value) {
    if (localStorage.getItem(value)) {
      return
    }
    this._title = value
    const current = JSON.parse(localStorage.getItem('projects')) || []
    current.push(value)
    localStorage.setItem('projects', JSON.stringify(current))
    localStorage.setItem(value, JSON.stringify([]))
  }
}

export default Project
