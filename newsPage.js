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
