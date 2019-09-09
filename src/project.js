class Project {
  constructor (title) {
    this.title = title
    this.members = []
  }

  logStuff () {
    console.log(`${this.title}`)
    console.log(this.members)
  }

  addItem(item){
    this.members.push(item)
  }

}

export default Project
