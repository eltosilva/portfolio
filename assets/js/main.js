(() => {

  function activeAcordeons(elemento) {
    const target = elemento.dataset.target
    const acordeon = document.querySelector(`[data-acordeon="${target}"]`)
  
    elemento.addEventListener('click', function () {
      acordeon.classList.toggle('occult')
      this.classList.toggle('down-arrow')
      this.classList.toggle('up-arrow')
    })
  }

  const elementos = document.querySelectorAll('[data-toggle]')

  elementos.forEach(elemento => {
    const toggle = elemento.dataset.toggle

    switch(toggle) {
      case 'acordeon':
        activeAcordeons(elemento)
        break
    }
  })

})()