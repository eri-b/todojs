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
      itemTitle.classList.add('is-size-4')
      itemTitle.innerHTML = list
      ctn.appendChild(itemTitle)

      const items = JSON.parse(localStorage.getItem(list))
      items.forEach((item, index) => {
        const delBtn = document.createElement('button')
        delBtn.classList.add('delete')
        const properties = document.createElement('div')
        properties.classList.add('item', 'message', 'is-info')
        const title = document.createElement('p')
        title.classList.add('is-size-5', 'message-header')
        title.innerHTML = item[0]
        const desc = document.createElement('p')
        desc.innerHTML = item[1]
        const due = document.createElement('p')
        due.innerHTML = `Due date: ${item[2]}`
        const pri = document.createElement('p')
        pri.innerHTML = `Priority: ${item[3]}`

        const descCtn = document.createElement('div')
        descCtn.classList.add('details', 'hidden', 'message-body')

        title.addEventListener('click', e => {
          e.preventDefault()
          properties.lastChild.classList.toggle('hidden')
        })

        title.appendChild(delBtn)
        properties.appendChild(title)
        properties.appendChild(descCtn)
        descCtn.appendChild(desc)
        descCtn.appendChild(due)
        descCtn.appendChild(pri)

        // Marking as completed
        if (item[4] === 'completed') {
          const completed = document.createElement('p')
          completed.innerHTML = 'Completed!'
          descCtn.appendChild(completed)
          properties.classList.remove('is-info')
          properties.classList.add('has-text-grey', 'is-success')
        } else {
          const edit = document.createElement('button')
          edit.innerHTML = 'Update description'
          edit.classList.add('button')
          const complete = document.createElement('button')
          complete.innerHTML = 'Complete'
          complete.classList.add('button')
          const priChange = document.createElement('button')
          priChange.innerHTML = 'Change Priority'
          priChange.classList.add('button')
          descCtn.appendChild(edit)
          descCtn.appendChild(complete)
          descCtn.appendChild(priChange)
          complete.addEventListener('click', () => {
            const thing = JSON.parse(localStorage.getItem(list))
            thing[index].push('completed')
            localStorage.setItem(list, JSON.stringify(thing))
            Ui.display()
          })

          // Change color to red if High Priority
          if (pri.innerHTML === 'Priority: High') {
            properties.classList.remove('is-info')
            properties.classList.add('is-danger')
          } else {
            properties.classList.remove('is-danger')
            properties.classList.add('is-info')
          }

          // Editing Item description
          edit.addEventListener('click', () => {
            desc.setAttribute('contenteditable', 'true')
            desc.focus()
            edit.classList.add('hidden')
            complete.classList.add('hidden')
            priChange.classList.add('hidden')
            const makeEdit = document.createElement('button')
            makeEdit.innerHTML = 'Edit'
            descCtn.appendChild(makeEdit)
            makeEdit.classList.add('button')
            makeEdit.addEventListener('click', () => {
              const thing = JSON.parse(localStorage.getItem(list))
              thing[index][1] = desc.innerHTML
              localStorage.setItem(list, JSON.stringify(thing))
              edit.classList.remove('hidden')
              complete.classList.remove('hidden')
              priChange.classList.remove('hidden')
              desc.setAttribute('contenteditable', 'false')
              descCtn.removeChild(makeEdit)
              Ui.display()
            })
          })

          // Changing Priority
          priChange.addEventListener('click', () => {
            const thing = JSON.parse(localStorage.getItem(list))
            thing[index][3] = thing[index][3] === 'High' ? 'Low' : 'High'
            localStorage.setItem(list, JSON.stringify(thing))
            Ui.display()
          })
        }

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
  }
}

export default Ui
