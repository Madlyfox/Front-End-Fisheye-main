/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
const queryStringUrlId = window.location.search

// ID EXTRACTION

const urlSearchParams = new URLSearchParams(queryStringUrlId)

const id = urlSearchParams.get('id')

const dataJson = '../data/photographers.json'
const mainSection = document.querySelector('.photograph-main')

async function getPhotographer() {
  const response = await fetch(dataJson)
  const data = await response.json()

  const photographer = data.photographers
  const photographerById = photographer.find((element) => element.id == id)

  return {
    photographerById,
  }
}
// Display Info
async function displayData(photographerById) {
  const headerSection = document.querySelector('.photograph-header')

  const headerModel = profilFactory(photographerById)
  const userHeaderDOM = headerModel.getUserHeaderDOM()
  headerSection.appendChild(userHeaderDOM)
}
// Get Media

async function getMedia() {
  const response = await fetch(dataJson)
  const data = await response.json()

  const mediaList = data.media
  const medias = mediaList.filter((element) => element.photographerId == id)

  return {
    medias,
  }
}

// Sort Media

function sortMedia(medias, sortBy) {
  mainSection.innerHTML = ''
  if (sortBy == 1) {
    medias.sort((a, b) => (a.likes < b.likes ? 1 : -1))
    medias.forEach((media) => {
      const mainModel = mediaFactory(media)
      const userMediaDOM = mainModel.getUserMediaDOM()
      mainSection.appendChild(userMediaDOM)
    })
  }
  if (sortBy == 2) {
    medias.map((obj) => ({ obj, date: new Date(obj.date) }))
    medias.sort((a, b) => b.date - a.date)
    medias.forEach((media) => {
      const mainModel = mediaFactory(media)
      const userMediaDOM = mainModel.getUserMediaDOM()
      mainSection.appendChild(userMediaDOM)
    })
  }
  if (sortBy == 3) {
    medias.sort((a, b) => a.title.localeCompare(b.title))
    medias.forEach((media) => {
      const mainModel = mediaFactory(media)
      const userMediaDOM = mainModel.getUserMediaDOM()
      mainSection.appendChild(userMediaDOM)
    })
  }
}
// Display Media

async function displayMedia(medias) {
  const sortBy = document.querySelector('select')

  sortMedia(medias, sortBy.value)
  // Sort Medias

  sortBy.addEventListener('change', () => {
    sortMedia(medias, sortBy.value)
  })

  // LightBox
  const mediaCard = document.querySelectorAll('.media')

  const previewBox = document.querySelector('.preview-box')
  const closePreview = document.querySelector('.close')

  for (let i = 0; i < mediaCard.length; i++) {
    let newIndex = i

    mediaCard[i].onclick = () => {
      function preview() {
        const insider = document.getElementById('inside')
        const selectedImgUrl = mediaCard[newIndex].src
        insider.innerHTML = ''
        console.log(mediaCard[newIndex])
        if (mediaCard[newIndex].tagName === 'VIDEO') {
          const video = document.createElement('video')
          video.autoplay = true
          video.controls = true
          video.muted = false
          video.src = selectedImgUrl

          insider.appendChild(video)
        }
        if (mediaCard[newIndex].tagName === 'IMG') {
          const img = document.createElement('img')
          img.autoplay = true
          img.controls = true
          img.muted = false
          img.src = selectedImgUrl

          insider.appendChild(img)
        }
      }
      // Next Prev
      const prevBtn = document.querySelector('.prev')
      const nextBtn = document.querySelector('.next')

      prevBtn.onclick = () => {
        newIndex -= 1 // decrement newIndexvalue

        if (newIndex === 0) {
          prevBtn.style.dislpay = 'none'
        } else {
          preview()
        }
      }
      nextBtn.onclick = () => {
        newIndex += 1 // increment newIndexvalue

        if (newIndex == 0) {
          nextBtn.style.dislpay = 'none'
        } else {
          preview()
        }
      }

      closePreview.onclick = () => {
        previewBox.classList.remove('show')
      }

      preview()
      previewBox.classList.add('show')
    }
  }
  previewBox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      previewBox.classList.remove('show')
    }
  })
}

// Get Likes
async function getLikes(medias) {
  const likesCount = medias
    .map((item) => item.likes)
    .reduce((prev, curr) => prev + curr, 0)
  const price = medias.map((item) => item.price)
  console.log(price)
  return {
    likesCount,
    price,
  }
}

// Display Likes

async function displayLikeCounter(medias) {
  const infoSection = document.querySelector('.photograph-info')

  const infoModel = infoFactory(medias)
  const userInfoDOM = infoModel.getUserInfoDOM()
  infoSection.appendChild(userInfoDOM)
}
// Display Modal
async function displayUserModal(photographerById) {
  const modalSection = document.querySelector('#contact_modal')

  const modalModel = modalFactory(photographerById)
  const userModalDOM = modalModel.getUserModalDOM()
  modalSection.appendChild(userModalDOM)
}

async function init() {
  // Récupère les datas des photographes
  const { photographerById } = await getPhotographer()
  const { medias } = await getMedia()
  const { likesCount } = await getLikes(medias)

  displayData(photographerById)
  displayMedia(medias)
  displayLikeCounter(likesCount)
  displayUserModal(photographerById)
}

init()
