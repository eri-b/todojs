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
      def.addItem(item)
      document.querySelector('#new-item').reset()
      document.querySelector('#title').focus()
      console.log(item)
    })

    document.querySelector('#new-project').addEventListener('submit', (e) => {
      e.preventDefault()
      const projTitle = document.querySelector('#proj-title').value
      const proj = new Project(projTitle)
      updateTodoForm(proj.title)
      console.log(proj)
    })
  }
}

export default Ui
