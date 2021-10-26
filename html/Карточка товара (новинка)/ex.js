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
/* Спецально разделил т.к. хз как там у тебя будет разбиваться по файлам*/

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

let popup = document.getElementById('product__popup');
let popupContent = document.getElementById('product__popup__content');
let contentImg = document.querySelectorAll('.product__img');
let closed = document.getElementById('close');

contentImg.forEach((imgVid) => {
    imgVid.addEventListener('click', (e) => {
        e.preventDefault();
        let obj;
        if (imgVid.tagName == 'IMG') {
            obj = document.createElement('img');
            obj.src = imgVid.src;
            popup.style.display = 'flex';
            popupContent.appendChild(obj);
        } else if (imgVid.tagName == 'VIDEO') {
            obj = document.createElement('video');
            obj.setAttribute('controls', true);
            obj.src = imgVid.src;
            popup.style.display = 'flex';
            popupContent.appendChild(obj);
        }
    })
})

closed.addEventListener('click', () => {
    popupContent.innerHTML = '';
    popupContent.appendChild(closed);
    popup.style.display = 'none';
})

// Мой код 