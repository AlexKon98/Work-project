const reviewsCarousel = $('.reviews_blocks_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },

        800: {
            items: 2,
        },

        1200: {
            items: 3,
        }
    }
});

$('.reviews_blocks_right').click(function() {
    reviewsCarousel.trigger('next.owl.carousel');
})

$('.reviews_blocks_left').click(function() {
    reviewsCarousel.trigger('prev.owl.carousel');
})

$('.benefit_blocks_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
});

let menuBtn = document.querySelector('.menu__btn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open-menu');
    if (menuBtn.classList.contains('open-menu')) {
        menuBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.853 1.14697L1.00002 25" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.14746 1L25.0005 24.853" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
        document.querySelector('.special__menu').style.display = 'block';
    } else {
        menuBtn.innerHTML = `<svg width="32" height="24" viewbox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11.9092H31" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 1H31" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 22.8184H31" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
        document.querySelector('.special__menu').style.display = 'none';
    }
})