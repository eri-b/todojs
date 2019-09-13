const itemHandling = (check, container, prop, prio, i, description, lis) => {
  if (check === 'completed') {
    const completed = document.createElement('p')
    completed.innerHTML = 'Completed!'
    container.appendChild(completed)
    prop.classList.remove('is-info')
    prop.classList.add('has-text-grey', 'is-success')
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
    container.appendChild(edit)
    container.appendChild(complete)
    container.appendChild(priChange)
    complete.addEventListener('click', () => {
      const thing = JSON.parse(localStorage.getItem(lis))
      thing[i].push('completed')
      localStorage.setItem(lis, JSON.stringify(thing))
      Ui.display()
    })

    const changeColor = (() => {
      if (prio.innerHTML === 'Priority: High') {
        prop.classList.remove('is-info')
        prop.classList.add('is-danger')
      } else {
        prop.classList.remove('is-danger')
        prop.classList.add('is-info')
      }
    })()

    const editDescription = (() => {
      edit.addEventListener('click', () => {
        description.setAttribute('contenteditable', 'true')
        description.focus()
        edit.classList.add('hidden')
        complete.classList.add('hidden')
        priChange.classList.add('hidden')
        const makeEdit = document.createElement('button')
        makeEdit.innerHTML = 'Edit'
        container.appendChild(makeEdit)
        makeEdit.classList.add('button')
        makeEdit.addEventListener('click', () => {
          const thing = JSON.parse(localStorage.getItem(lis))
          thing[i][1] = description.innerHTML
          localStorage.setItem(lis, JSON.stringify(thing))
          edit.classList.remove('hidden')
          complete.classList.remove('hidden')
          priChange.classList.remove('hidden')
          description.setAttribute('contenteditable', 'false')
          container.removeChild(makeEdit)
          Ui.display()
        })
      })
    })()

    const changePriority = (() => {
      priChange.addEventListener('click', () => {
        const thing = JSON.parse(localStorage.getItem(lis))
        thing[i][3] = thing[i][3] === 'High' ? 'Low' : 'High'
        localStorage.setItem(lis, JSON.stringify(thing))
        Ui.display()
      })
    })()
  }
}

const Ui = (() => {
  const updateProjectDropdown = () => {
    const projectSelector = document.querySelector('#projects')
    const projs = JSON.parse(localStorage.getItem('projects'))
    while (projectSelector.firstChild) {
      projectSelector.removeChild(projectSelector.firstChild)
    }

    projs.forEach(proj => {
      const option = document.createElement('option')
      option.text = proj
      projectSelector.add(option)
    })
  }

  const display = () => {
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

        itemHandling(item[4], descCtn, properties, pri, index, desc, list)

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
  return { display, updateProjectDropdown }
})()

export default Ui
