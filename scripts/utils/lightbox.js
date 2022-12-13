function displayLihtbox( {
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
      window.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
          return // Ne devrait rien faire si l'événement de la touche était déjà consommé.
        }
        switch (event.key) {
          case 'Escape':
            previewBox.classList.remove('show')
            break
          default:
            return // Quitter lorsque cela ne gère pas l'événement touche.
        }

        // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
        event.preventDefault()
      })

      preview()
      previewBox.classList.add('show')
    }
})