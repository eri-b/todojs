class Item {
  constructor (title, description, dueDate, priority, project) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
  }

  logStuff () {
    console.log(`${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}`)
  }

  addToProject () {
    const current = JSON.parse(localStorage.getItem(this.project))
    current.push([this.title, this.description, this.dueDate, this.priority])
    localStorage.setItem(this.project, JSON.stringify(current))
    console.log(this.project)
    console.log(current)
  }
}

export default Item
