const da = document.getElementsByClassName("skill_block");
//const mouse = document.getElementById('mouse');
const mouse = document.getElementsByName('mouse');

document.addEventListener("mousemove", function (e) {
move (e.clientX, e.clientY);
});

function move (x, y) {
let wh = window.innerHeight / 2,
ww = window.innerWidth / 2;

for (var i = 0; i < da.length; i++) {
  da[i].style.setProperty('--mouseX', (x - ww) / 10 + "px");
  da[i].style.setProperty('--mouseY', (y - wh) / 10 + "px");
};

  mouse[0].style.setProperty('--mouseDragX', (x + 40)+ "px");
  mouse[0].style.setProperty('--mouseDragY', (y - 20)+ "px");
}




var galleryThumbs = new Swiper('.gallery-thumbs', {
  speed: 500,
  spaceBetween: 4,
  slidesPerView: 1,
  freeMode: false,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: false,
  watchSlidesProgress: false,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
});
var galleryTop = new Swiper('.gallery-top', {
  speed: 500,
  slidesPerView: 3,
  spaceBetween: 4,
  loop:true,
  centeredSlides: true,
  spaceBetween: 300,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 3,
    stretch: 0,
    depth: 1,
    modifier: 1,
    slideShadows : false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 40,
      coverflowEffect: {
        rotate: 13,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows : false,
      },
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 800
    }
   },
  thumbs: {
    swiper: galleryThumbs,
  },
});


/*
// СлайдерSwiper



//Контроль слайдера



*/

//element.getElementsByTagName('figure')[0].style.transform = 'rotate(0deg)';
//const sliderimg = swiperSlides[swiper.realIndex].getElementsByTagName('figure')
//sliderimg[0].style.transform = 'rotate(12deg)';
