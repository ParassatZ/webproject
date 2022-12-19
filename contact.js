const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('links-container')[0]
const navL = document.querySelectorAll('links-container li') ;
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })