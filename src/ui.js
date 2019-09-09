import Item from './item'
import { projects, Project } from './project'
import populate from './tasks'

const updateTodoForm = (name) => {
  const projectSelector = document.querySelector('#projects')
  const option = document.createElement('option')
  option.text = name
  projectSelector.add(option)
}

class Ui {
  static listeners () {
    const def = new Project('Default')
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
      populate()
      console.log(proj)
      console.log(projects)
    })
  }
}

export default Ui
