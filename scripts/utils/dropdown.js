const options = document.getElementById('options')
const optionList = ['Popularité', 'Date', 'Titre']

let isOpen = false

function deleteOptions() {
  while (options.childElementCount > 1) {
    options.removeChild(options.lastElementChild)
  }
}

function createOptions() {
  optionList.forEach((element) => {
    if (options.firstElementChild.textContent !== element) {
      const option = document.createElement('div')
      option.className = 'option'
      option.setAttribute('tabIndex', '0')
      option.id = 'test'

      option.textContent = element
      const e = new Event('change')
      const select = document.getElementById('mySelect')
      option.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          if (option.textContent === 'Popularité') {
            select.value = 1

            select.dispatchEvent(e)
          }
          if (option.textContent === 'Date') {
            select.value = 2

            select.dispatchEvent(e)
          }
          if (option.textContent === 'Titre') {
            select.value = 3

            select.dispatchEvent(e)
          }
        }
      })

      option.addEventListener('click', () => {
        if (option.textContent === 'Popularité') {
          select.value = 1

          select.dispatchEvent(e)
        }
        if (option.textContent === 'Date') {
          select.value = 2

          select.dispatchEvent(e)
        }
        if (option.textContent === 'Titre') {
          select.value = 3

          select.dispatchEvent(e)
        }
      })
      options.firstElementChild.insertAdjacentElement('afterend', option)
    }
  })
}

function controlOptions() {
  if (isOpen === false) {
    createOptions()
    options.classList.add('opened')
    isOpen = true
  } else {
    deleteOptions()
    options.classList.remove('opened')
    isOpen = false
  }
}

function addToUIOptions(e) {
  if (e.target.classList.contains('hide-option')) {
    controlOptions(e)
  } else {
    const pickedOption = e.target

    if (options.firstElementChild.classList.contains('hide-option')) {
      options.removeChild(options.firstElementChild)
    }
    options.insertAdjacentElement('afterbegin', pickedOption)

    deleteOptions()
    controlOptions(e)
  }
}

options.addEventListener('click', addToUIOptions)
options.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    if (isOpen === false) {
      createOptions()
      options.classList.add('opened')
      isOpen = true
    } else {
      deleteOptions()
      options.classList.remove('opened')
      isOpen = false
    }
  }
})
