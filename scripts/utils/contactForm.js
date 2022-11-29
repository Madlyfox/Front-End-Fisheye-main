/* eslint-disable no-unused-vars */
function displayModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'block'
}

function closeModal() {
  const modal = document.getElementById('contact_modal')
  modal.style.display = 'none'
}

const carousel = document.getElementById('carousel_modal')
const slidesContainer = document.getElementById('slides-container')

const prevButton = document.getElementById('slide-arrow-prev')
const nextButton = document.getElementById('slide-arrow-next')
