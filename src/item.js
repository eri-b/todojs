class Item {
  constructor (title, description, dueDate, priority) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
  }

  logStuff () {
    console.log(`${this.title}, ${this.description}, ${this.dueDate}, ${this.priority}`)
  }
}

export default Item
