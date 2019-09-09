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
}

export default Item
