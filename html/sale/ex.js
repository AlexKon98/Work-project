let infoSliderWindow = document.querySelector('.info_slider_window')

let sliderLeft = document.querySelector('.info_slider_left')
let sliderRight = document.querySelector('.info_slider_right')
let carousel = document.querySelector('.info_slider_carousel')

let carouselBlocks = document.querySelectorAll('.info_slider_carousel div')

let slider_clicks = 0
let windWidth = infoSliderWindow.clientWidth


carouselBlocks.forEach(block => { block.style.width = (windWidth - 12) / 2 + 'px' })


let goRig = () => {
    if (carouselBlocks.length - 2 > slider_clicks) {
        slider_clicks += 1
        carousel.style.left = `calc((((${windWidth + 'px'} - 12px) / 2) * ${-slider_clicks}) - ( 12px * ${slider_clicks})`
    }
}

let goLeft = () => {
    if (slider_clicks !== 0) {
        slider_clicks -= 1
        carousel.style.left = `calc((((${windWidth + 'px'} - 12px) / 2) * ${-slider_clicks}) - ( 12px * ${slider_clicks})`
    }
}



sliderRight.addEventListener('click', () => { goRig() })


sliderLeft.addEventListener('click', () => { goLeft() })

window.addEventListener('resize', () => {
    windWidth = infoSliderWindow.clientWidth
    carouselBlocks.forEach(block => { block.style.width = (windWidth - 12) / 2 + 'px' })
    carousel.style.left = `calc((((${windWidth + 'px'} - 12px) / 2) * ${-slider_clicks}) - ( 12px * ${slider_clicks})`
})

/////////////////////////////////////
/* Спецально рахделил т.к. хз как там у тебя будет разбиваться по файлам*/


let recommendedSliderWindow = document.querySelector('.recommended_slider_windiw')

let recommendedliderLeft = document.querySelector('.recommended_slider_left')
let recommendedliderRight = document.querySelector('.recommended_slider_right')
let recommendedCarousel = document.querySelector('.recommended_slider_carousel')

let recommendedBlocks = document.querySelectorAll('.recommended_slider_block')

let recommendedСlicks = 0
let windRecommended = recommendedSliderWindow.clientWidth


recommendedBlocks.forEach(block => { block.style.width = (windRecommended - 48) / 5 + 'px' })


let recommendedRig = () => {
    if (recommendedBlocks.length - 5 > recommendedСlicks) {
        recommendedСlicks += 1
        recommendedCarousel.style.left = `calc((((${windRecommended + 'px'} - 48px) / 5) * ${-recommendedСlicks}) - ( 12px * ${recommendedСlicks})`
    }
}

let recommendedLeft = () => {
    if (recommendedСlicks !== 0) {
        recommendedСlicks -= 1
        recommendedCarousel.style.left = `calc((((${windRecommended + 'px'} - 48px) / 5) * ${-recommendedСlicks}) - ( 12px * ${recommendedСlicks})`
    }
}



recommendedliderRight.addEventListener('click', () => { recommendedRig() })


recommendedliderLeft.addEventListener('click', () => { recommendedLeft() })

window.addEventListener('resize', () => {
    windRecommended = recommendedSliderWindow.clientWidth
    recommendedBlocks.forEach(block => { block.style.width = (windRecommended - 48) / 5 + 'px' })
    recommendedCarousel.style.left = `calc((((${windRecommended + 'px'} - 48px) / 5) * ${-recommendedСlicks}) - ( 12px * ${recommendedСlicks})`
})

// Мой код

let productBlockBord = document.querySelectorAll('.product_block_bord');
let productOne = document.getElementById('product_block_bord-one');
let productTwo = document.getElementById('product_block_bord-two');
let productText = document.getElementById('product_text');

productBlockBord.forEach((product) => {
    product.addEventListener('click', () => {
        productBlockBord.forEach((item) => {
            item.classList.remove('product_block_bord-active');
          });
          product.classList.add('product_block_bord-active');
    });
});

productOne.addEventListener('click', () => {
    productText.innerHTML = 'Для современного мира перспективное планирование представляет собой интересный эксперимент проверки направлений прогрессивного развития. Для современного мира перспективное планирование представляет собой. Для современного мира перспективное планирование представляет собой интересный эксперимент проверки направлений прогрессивного развития. Для современного мира перспективное планирование представляет собой.';
});
    
productTwo.addEventListener('click', () => {
    productText.innerHTML = 'Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Запятой свою это напоивший продолжил речью предупредила переписали свой взобравшись единственное, алфавит они дал он проектах подпоясал, ты она заманивший! Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Запятой свою это напоивший продолжил речью предупредила переписали свой взобравшись единственное, алфавит они дал он проектах подпоясал, ты она заманивший!';
})

// Мой код 