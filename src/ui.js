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
  hideDetails()
}

class Ui {
  static listeners () {
    const def = new Project('Default')
    def.addToStorage()
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
      proj.addToStorage()
      updateTodoForm()
      Ui.display()
    })
  }

  static display () {
    const lists = document.querySelector('#lists')

    while (lists.firstChild) {
      lists.removeChild(lists.firstChild)
    }

    const projs = JSON.parse(localStorage.getItem('projects'))
    projs.forEach(proj => {
      const ctn = document.createElement('div')
      ctn.classList.add('list')
      const projTitle = document.createElement('h2')
      projTitle.innerHTML = proj
      ctn.appendChild(projTitle)

      const props = JSON.parse(localStorage.getItem(proj))

      props.forEach(prop => {
        const properties = document.createElement('div')
        properties.classList.add('item')
        const title = document.createElement('p')
        title.innerHTML = prop[0]
        const desc = document.createElement('p')
        desc.innerHTML = prop[1]
        const due = document.createElement('p')
        due.innerHTML = prop[2]
        const pri = document.createElement('p')
        pri.innerHTML = prop[3]

        const descCtn = document.createElement('div')
        descCtn.classList.add('details')

        properties.appendChild(title)
        properties.appendChild(descCtn)
        descCtn.appendChild(desc)
        descCtn.appendChild(due)
        descCtn.appendChild(pri)

        ctn.appendChild(properties)
      })

      lists.appendChild(ctn)
    })
  }
}

const hideDetails = () => {
  const items = document.querySelectorAll('.item')
  items.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()
      item.classList.toggle('hidden')
    })
  })
}

export default Ui
