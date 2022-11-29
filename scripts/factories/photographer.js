function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data

  const picture = `assets/photographers/${portrait}`

  function getUserCardDOM() {
    const a = document.createElement('a')
    a.setAttribute('href', `photographer.html?id=${id}`)
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', 'Photo de profil')
    const h2 = document.createElement('h2')
    h2.textContent = name
    const h3 = document.createElement('h3')
    h3.textContent = `${city}, ${country}`
    const p = document.createElement('p')
    p.textContent = tagline
    const small = document.createElement('small')
    small.textContent = `${price}€/jours`

    a.appendChild(article)
    article.appendChild(img)
    article.appendChild(h2)
    article.appendChild(h3)
    article.appendChild(p)
    article.appendChild(small)

    return a
  }
  return { name, picture, getUserCardDOM }
}
function profilFactory(data) {
  const { name, portrait, city, country, tagline, price } = data

  const picture = `assets/photographers/${portrait}`
  const infoBox = document.querySelector('.photograph-info')

  function getUserHeaderDOM() {
    const section = document.createElement('section')
    const info = document.createElement('div')
    info.setAttribute('class', 'info')
    const h1 = document.createElement('h1')
    h1.textContent = name
    const h2 = document.createElement('h2')
    h2.textContent = `${city}, ${country}`
    const p = document.createElement('p')
    p.textContent = tagline
    const priceInfo = document.createElement('p')
    priceInfo.textContent = `${price}/jours`
    const btn = document.createElement('button')
    btn.setAttribute('onclick', 'displayModal()')
    btn.setAttribute('class', 'contact_button')
    btn.textContent = 'Contactez moi'

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)

    section.appendChild(info)
    info.appendChild(h1)
    info.appendChild(h2)
    info.appendChild(p)
    section.appendChild(btn)
    section.appendChild(img)
    infoBox.appendChild(priceInfo)

    return section
  }
  return { name, picture, getUserHeaderDOM }
}
function mediaFactory(data) {
  const { id, photographerId, title, image, video, date, price } = data
  let { likes } = data
  const imgSrc = `assets/photos/${photographerId}/${image}`
  const vdoSrc = `assets/photos/${photographerId}/${video}`

  const svgNs = 'http://www.w3.org/2000/svg'

  function getUserMediaDOM() {
    const card = document.createElement('a')
    card.setAttribute('class', 'card')
    card.setAttribute('data-id', id)

    if (image) {
      const img = document.createElement('img')
      img.setAttribute('src', imgSrc)
      img.setAttribute('class', 'image')
      img.setAttribute('alt', title)
      img.classList.add('media')
      img.setAttribute('tabindex', '0 ')
      card.appendChild(img)
    }
    if (video) {
      const video = document.createElement('video')
      video.setAttribute('src', vdoSrc)
      video.setAttribute('type', 'video/mp4')
      video.setAttribute('alt', title)
      video.autoplay = false
      video.controls = false
      video.muted = false
      video.classList.add('media')
      card.appendChild(video)
    }
    const cardFooter = document.createElement('div')
    cardFooter.setAttribute('class', 'card_footer')
    const h3 = document.createElement('h3')
    h3.setAttribute('class', 'title')
    h3.textContent = title
    const likeCounter = document.createElement('div')
    likeCounter.setAttribute('class', 'likeCount')
    const p = document.createElement('p')
    p.setAttribute('id', 'likes')
    p.innerHTML = likes
    const heart = document.createElement('i')
    heart.setAttribute('class', 'far fa-heart')

    heart.onclick = function () {
      if (p.classList.contains('liked')) {
        p.classList.remove('liked')
        heart.classList.remove('liked')
        p.innerHTML = likes -= 1
      } else {
        p.classList.add('liked')
        heart.classList.add('liked')
        p.innerHTML = likes += 1
      }
    }

    card.appendChild(cardFooter)
    cardFooter.appendChild(h3)
    cardFooter.appendChild(likeCounter)
    likeCounter.appendChild(p)
    likeCounter.appendChild(heart)

    return card
  }

  return { title, likes, getUserMediaDOM }
}
function infoFactory(data) {
  const likesCount = data
  const price = data
  function getUserInfoDOM() {
    const info = document.createElement('div')
    const likes = document.createElement('p')
    const price = document.createElement('p')

    likes.innerHTML = `${likesCount}    <i class="fa-solid fa-heart"></i>`

    info.appendChild(likes)
    info.appendChild(price)
    return info
  }

  return { likesCount, getUserInfoDOM }
}
function modalFactory(data) {
  const { name } = data
  function getUserModalDOM() {
    const modal = document.createElement('div')
    modal.setAttribute('class', 'modal')
    // Header
    const header = document.createElement('header')
    const h2 = document.createElement('h2')
    h2.textContent = 'Contactez-moi'
    const photographName = document.createElement('h2')
    photographName.textContent = name
    const img = document.createElement('img')
    img.setAttribute('src', 'assets/icons/close.svg')
    img.setAttribute('onclick', 'closeModal()')
    img.setAttribute('alt', 'close')
    // form
    const form = document.createElement('form')
    const fieldset = document.createElement('fieldset')
    // name
    const firstnameLabel = document.createElement('label')
    firstnameLabel.textContent = 'Prénom'
    const firstnameInput = document.createElement('input')
    firstnameInput.setAttribute('type', 'text')
    firstnameInput.setAttribute('autocomplete', 'firstname')
    firstnameInput.setAttribute('aria-required', 'true')
    // lastname
    const lastnameLabel = document.createElement('label')
    lastnameLabel.textContent = 'Nom'
    const lastnameInput = document.createElement('input')
    lastnameInput.setAttribute('type', 'text')
    lastnameInput.setAttribute('autocomplete', 'lastname')
    lastnameInput.setAttribute('aria-required', 'true')
    // mail
    const mailLabel = document.createElement('label')
    mailLabel.textContent = 'Email'
    const mailInput = document.createElement('input')
    mailInput.setAttribute('type', 'mail')
    mailInput.setAttribute('autocomplete', 'mail')
    mailInput.setAttribute('aria-required', 'true')
    // message
    const messageLabel = document.createElement('label')
    messageLabel.textContent = 'Votre Message'
    const messageInput = document.createElement('textarea')
    messageInput.setAttribute('autocomplete', 'message')
    messageInput.setAttribute('aria-required', 'true')
    // btn
    const btn = document.createElement('button')
    btn.setAttribute('class', 'contact_button')
    btn.textContent = 'Envoyer'

    modal.appendChild(header)
    modal.appendChild(form)

    header.appendChild(h2)

    header.appendChild(photographName)
    header.appendChild(img)

    form.appendChild(fieldset)

    fieldset.appendChild(firstnameLabel)
    fieldset.appendChild(lastnameLabel)
    fieldset.appendChild(mailLabel)
    fieldset.appendChild(messageLabel)

    firstnameLabel.appendChild(firstnameInput)
    lastnameLabel.appendChild(lastnameInput)
    mailLabel.appendChild(mailInput)
    messageLabel.appendChild(messageInput)
    fieldset.appendChild(btn)

    return modal
  }

  return { name, getUserModalDOM }
}
