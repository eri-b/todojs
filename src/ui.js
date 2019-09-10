import Item from './item'
import Project from './project'

const updateTodoForm = () => {
  const projectSelector = document.querySelector('#projects')
  const projs = JSON.parse(localStorage.getItem('projects'))
  while (projectSelector.firstChild) {
    projectSelector.removeChild(projectSelector.firstChild)
  }
  for (let i = 0; i < projs.length; i++) {
    const e = projs[i]
    const option = document.createElement('option')
    option.text = e
    projectSelector.add(option)
  }
}



class Ui {
  static listeners () {
    const def = new Project('Default')
    updateTodoForm()
    document.querySelector('#new-item').addEventListener('submit', (e) => {
      e.preventDefault()
      const title = document.querySelector('#title').value
      const description = document.querySelector('#description').value
      const dueDate = document.querySelector('#due-date').value
      const priority = document.querySelector('#priority').value
      const project = document.querySelector('#projects').value
      const item = new Item(title, description, dueDate, priority, project)
      item.addToProject()
      Ui.display()
      document.querySelector('#new-item').reset()
      document.querySelector('#title').focus()
    })

    document.querySelector('#new-project').addEventListener('submit', (e) => {
      e.preventDefault()
      const projTitle = document.querySelector('#proj-title').value
      const proj = new Project(projTitle)
      updateTodoForm()
      Ui.display()
    })
  }

  static display(){
    const lists = document.querySelector('#lists')
    //clear
    //loop through localStorage(Projects)
    // set up a div with the project name
    // if we find a key in local storage with that project name, loop through its members and display info


    const item = document.createElement('div')
    item.innerHTML = "hello world"
    lists.appendChild(item)
  }
}

export default Ui
