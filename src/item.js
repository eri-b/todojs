class Item {
  constructor (title, description, dueDate, priority, project) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.project = project
  }

  addToProject () {
    const current = JSON.parse(localStorage.getItem(this.project))
    current.push([this.title, this.description, this.dueDate, this.priority])
    localStorage.setItem(this.project, JSON.stringify(current))
  }
}

export default Item
