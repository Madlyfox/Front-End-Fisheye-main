/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// index factory
function profilFactory(data) {
  const { name, portrait, city, country, tagline } = data

  const picture = `assets/photographers/${portrait}`

  function getUserHeaderDOM() {
    const section = document.createElement('section')
    const info = document.createElement('div')
    info.setAttribute('class', 'info')
    const h2 = document.createElement('h2')
    h2.textContent = name
    const h3 = document.createElement('h3')
    h3.textContent = `${city}, ${country}`
    const p = document.createElement('p')
    p.textContent = tagline

    const btn = document.createElement('button')
    btn.setAttribute('onclick', displayModal())
    btn.setAttribute('class', 'contact_button')
    btn.textContent = 'Contactez moi'

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', name)

    section.appendChild(info)
    info.appendChild(h2)
    info.appendChild(h3)
    info.appendChild(p)
    section.appendChild(btn)
    section.appendChild(img)

    return section
  }
  return { name, picture, getUserHeaderDOM }
}
