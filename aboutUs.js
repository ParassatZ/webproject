$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items:2,
        loop:true,
        nav:true,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:1500,
        autoplayHoverPause:true
    });
  });
  const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('links-container')[0]
const navL = document.querySelectorAll('links-container li') ;
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })