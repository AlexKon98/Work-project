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

$('.reviews_blocks_right').click(function () {
    reviewsCarousel.trigger('next.owl.carousel');
})

$('.reviews_blocks_left').click(function () {
    reviewsCarousel.trigger('prev.owl.carousel');
})

$('.benefit_blocks_carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    items: 1,
});