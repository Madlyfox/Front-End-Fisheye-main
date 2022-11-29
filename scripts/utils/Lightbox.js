const options = document.getElementById('options')
const optionList = ['San Francisco', 'Los Angeles', 'Seattle']

let isOpen = false

options.addEventListener('click', addToUIOptions)

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

function controlOptions(e) {
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
      option.textContent = element

      options.firstElementChild.insertAdjacentElement('afterend', option)
    }
  })
}
