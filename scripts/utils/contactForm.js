/* eslint-disable no-unused-vars */
function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

function closeModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

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
