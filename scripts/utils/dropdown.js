const dropdown = document.getElementById('myDropdown')
const btn = document.querySelector('.dropbtn')

const optionList = dropdown.querySelectorAll('a')

const select = document.querySelector('select')

function selectValue() {
  const e = new Event('change')

  if (select.value === '1') {
    btn.textContent = 'Popularité'
    const selected = document.getElementById('optionPop')
    selected.style.display = 'none'
    select.dispatchEvent(e)
  } else {
    const selected = document.getElementById('optionPop')
    selected.style.display = 'block'
  }
  if (select.value === '2') {
    btn.textContent = 'Date'
    const selected = document.getElementById('optionDat')
    selected.style.display = 'none'
    select.dispatchEvent(e)
  } else {
    const selected = document.getElementById('optionDat')
    selected.style.display = 'block'
  }
  if (select.value === '3') {
    btn.textContent = 'Titre'
    const selected = document.getElementById('optionTit')
    selected.style.display = 'none'
    select.dispatchEvent(e)
  } else {
    const selected = document.getElementById('optionTit')
    selected.style.display = 'block'
  }
}
selectValue()

function setValue(e) {
  select.value = e
  console.log(select.value)

  selectValue()
}

function showDropdown() {
  dropdown.classList.toggle('show')
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementsByClassName('dropdown-content')
    let i
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
}
