import Item from './item'
import { Project, validate } from './project'
import Ui from './ui'

const listen = () => {
  if (validate('Default')) {
    const def = new Project('Default')
    def.addToStorage()
  }
  Ui.updateProjectDropdown()
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
    if (validate(projTitle)) {
      const proj = new Project(projTitle)
      proj.addToStorage()
    }
    Ui.updateProjectDropdown()
    Ui.display()
    document.querySelector('#new-project').reset()
  })
}
export default listen
