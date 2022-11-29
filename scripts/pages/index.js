const dataJson = '../data/photographers.json'

async function getPhotographers() {
  const response = await fetch(dataJson)
  const data = await response.json()

  const { photographers } = data
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers,
  }
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section')

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer)
    const userCardDOM = photographerModel.getUserCardDOM()
    photographersSection.appendChild(userCardDOM)
  })
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers()
  displayData(photographers)
}

init()
