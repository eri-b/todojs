import Item from './item'
import { Project, validate } from './project'

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
    if (validate('Default')) {
      const def = new Project('Default')
      def.addToStorage()
    }
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
      if (validate(projTitle)) {
        const proj = new Project(projTitle)
        proj.addToStorage()
      }
      updateTodoForm()
      Ui.display()
      document.querySelector('#new-project').reset()
    })
  }

  static display () {
    const listsContent = document.querySelector('#lists')

    while (listsContent.firstChild) {
      listsContent.removeChild(listsContent.firstChild)
    }

    const lists = JSON.parse(localStorage.getItem('projects'))
    lists.forEach(list => {
      const ctn = document.createElement('div')
      ctn.classList.add('list')
      const itemTitle = document.createElement('h2')
      itemTitle.innerHTML = list
      ctn.appendChild(itemTitle)

      const items = JSON.parse(localStorage.getItem(list))
      items.forEach((item, index) => {
        const delBtn = document.createElement('button')
        delBtn.classList.add('delete')
        const properties = document.createElement('div')
        properties.classList.add('item', 'notification', 'is-danger')
        const title = document.createElement('p')
        title.innerHTML = item[0]
        const desc = document.createElement('p')
        desc.innerHTML = item[1]
        const due = document.createElement('p')
        due.innerHTML = item[2]
        const pri = document.createElement('p')
        pri.innerHTML = item[3]

        const descCtn = document.createElement('div')
        descCtn.classList.add('details')

        properties.appendChild(delBtn)
        properties.appendChild(title)
        properties.appendChild(descCtn)
        descCtn.appendChild(desc)
        descCtn.appendChild(due)
        descCtn.appendChild(pri)
        ctn.appendChild(properties)

        delBtn.addEventListener('click', () => {
          const thing = JSON.parse(localStorage.getItem(list))
          thing.splice(index, 1)
          localStorage.setItem(list, JSON.stringify(thing))
          Ui.display()
        })
      })

      listsContent.appendChild(ctn)
    })
    toggleDetails()
  }
}

const toggleDetails = () => {
  const items = document.querySelectorAll('.item')
  console.log(items)
  items.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()
      item.lastChild.classList.toggle('hidden')
    })
  })
}

export default Ui
