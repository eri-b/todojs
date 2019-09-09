import Item from './item'
import Project from './project'

const def = new Project('Default')

document.querySelector('#new-item').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector("#new-item input[type='text']").value
  const item = new Item(title, 'random', 'today', 'high')
  def.addItem(item)
  def.logStuff()
})
