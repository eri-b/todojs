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
  }

  logStuff () {
    console.log(this.title)
  }

  addToStorage () {
    const current = JSON.parse(localStorage.getItem('projects')) || []
    current.push(this._title)
    localStorage.setItem('projects', JSON.stringify(current))
    localStorage.setItem(this._title, JSON.stringify([]))
  }
}

export default Project
