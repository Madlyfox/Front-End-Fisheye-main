/* eslint-disable no-unused-vars */

const modal = document.getElementById('contact_modal')

function displayModal() {
  modal.style.display = 'block'
  document.getElementById('firstname').focus()
}

function closeModal() {
  modal.style.display = 'none'
}
const previewBox = document.querySelector('.preview-box')

modal.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Escape':
      closeModal()
      previewBox.classList.remove('show')
      break
    default:
  }
})
document.getElementById('contact_modal').addEventListener('submit', (e) => {
  // prevent the normal submission of the form
  e.preventDefault()
  const firstnameInput = document.getElementById('firstname')
  const lastnameInput = document.getElementById('lastname')
  const emailInput = document.getElementById('mail')
  const messageInput = document.getElementById('message')
  console.log(firstnameInput.value)
  console.log(lastnameInput.value)
  console.log(emailInput.value)
  console.log(messageInput.value)
})
