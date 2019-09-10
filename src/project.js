
class Project {
  constructor (title) {
    this.title = title
    this.members = []
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

  logStuff () {
    console.log(this.title)
    console.log(this.members)
  }

  addItem (item) {
    this.members.push(item)
  }
}

export default Project
