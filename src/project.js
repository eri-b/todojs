class Project {
  constructor (title) {
    this.title = title
  }

  get title () {
    return this._title
  }

  set title (value) {
    this._title = value
  }

  addToStorage () {
    const current = JSON.parse(localStorage.getItem('projects')) || []
    current.push(this._title)
    localStorage.setItem('projects', JSON.stringify(current))
    localStorage.setItem(this._title, JSON.stringify([]))
  }
}

const validate = (val) => {
  if (localStorage.getItem(val)) {
    return false
  }
  return true
}

export { Project, validate }
