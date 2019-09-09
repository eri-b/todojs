import Item from './item'
import Project from './project'

const def = new Project('Default')

document.querySelector('#new-item').addEventListener('submit', (e) => {
  e.preventDefault()
  const title = document.querySelector('#title').value
  const description = document.querySelector('#description').value
  const dueDate = document.querySelector('#due-date').value
  const priority = document.querySelector('#priority').value
  const item = new Item(title, description, dueDate, priority)
  def.addItem(item)
  document.querySelector('#new-item').reset()
  document.querySelector('#title').focus()
})

document.querySelector('#new-project').addEventListener('submit', (e) => {
  e.preventDefault()
  const projTitle = document.querySelector('#proj-title').value
  const proj = new Project(projTitle)
  console.log(proj)
})
