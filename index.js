var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
productContainers.forEach((item,i) => {
    let containerDimenstions=item.getBoundingClientRect();
    let containerWidth=containerDimenstions.width;

    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft+=containerWidth;
    })
    preBtn[i].addEventListener('click',() => {
        item.scrollLeft-=containerWidth;
    })
})
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navLinks = document.getElementsByClassName('links-container')[0]
const navL = document.querySelectorAll('links-container li') ;

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
  })
