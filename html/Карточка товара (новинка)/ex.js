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

let more = document.querySelector('.product_text_more');

more.addEventListener('click', () => { 
    document.querySelector('.product_text-hide').style.display = "block";
    more.style.display = "none";
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