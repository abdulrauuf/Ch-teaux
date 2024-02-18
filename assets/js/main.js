/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*====  Menu Show====*/
// Validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/*====  Menu Hidden====*/
/* Validate is constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',
    
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides: 'auto',
        },
        1152: {
            centeredSlides: 'auto',
            spaceBetween: -64,
        },
    }
})
/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
   //reset: true //Animation repeat
})

sr.reveal(`.home__swiper, .home__footer`)
sr.reveal(`.home__circle`, { scale: 1.5, delay: 300 })
sr.reveal(`.home__subcircle`, { scale: 1.5, delay: 500 })
sr.reveal(`.home__title`, { scale: 1, origin: 'bottom', delay: 1200 })
sr.reveal(`.swiper-button-prev, .swiper-button-next`, { origin: 'bottom' })

