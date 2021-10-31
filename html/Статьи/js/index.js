document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.swiper__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;
      document.querySelectorAll('.swipe-content-active').forEach(function(tabContent) {
        tabContent.classList.remove('article__block');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('article__block');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.swiper__link').forEach(function(tabs) {
    tabs.addEventListener('click', function(click) {
      const btn = click.currentTarget.dataset.path;
      document.querySelectorAll('.swiper__link').forEach(function(tab) {
        tab.classList.remove('swipe-item-active');
      });
      document.querySelector(`[data-path="${btn}"]`).classList.add('swipe-item-active');
    });
  });
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

let readMore = document.querySelectorAll('.read__more');
let accordion = document.querySelectorAll('.article__accordion');
let slider = document.querySelectorAll('.swiper-slide');
let container = document.querySelector('.container');

readMore.forEach((read) => {
  read.addEventListener('click', () => {
    read.style.display = 'none';
    accordion.forEach((item) => {
      item.style.height = 'max-content';
    })
  })
})

slider.forEach((slide) => {
  slide.addEventListener('click', () => {
    readMore.forEach((read) => {
      read.style.display = 'block';
      accordion.forEach((item) => {
        item.style.height = '220px';
      })
    })
  })
})