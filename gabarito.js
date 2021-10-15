const body = document.querySelector('body');

const modals = () => {
  body.addEventListener('click', (e) => {
    if (Object.values(e.target.classList)[0] == 'pointer') {
      if (e.target.innerText.length > 1) {
        alert(e.target.innerText)
      } else {
        alert('Os heróis amam esse ícone!')
      }
      }
  })
}

modals()
