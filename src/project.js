const projects = []

class Project {
  constructor (title) {
    this.title = title
    this.members = []
    projects.push(title)
  }

  logStuff () {
    console.log(this.title)
    console.log(this.members)
  }

  addItem (item) {
    this.members.push(item)
  }
}

export { projects, Project }
