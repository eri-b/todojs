

const tasks = document.querySelector('.tasks')

const populate = () => {
  tasks.childNodes.forEach(element => {
    tasks.removeChild(element)
  })

  for (let index = 0; index < projects.length; index++) {
    const e = projects[index]
    const j = document.createElement('DIV')
    const p = document.createElement('H2')

    p.innerHTML = e

    j.appendChild(p)
    tasks.appendChild(j)
  }
}

export default populate
