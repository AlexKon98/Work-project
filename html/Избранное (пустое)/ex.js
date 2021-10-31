let bonuses_btns = document.querySelectorAll('.my-bonuses__link')
let bonuses_li = document.querySelectorAll('.my-bonuses__item')
let countHeart = document.querySelector('.my_bonuses_count')
let bonusesTitle = document.querySelector('.my-bonuses__heading')

countHeart.classList.add('my_bonuses_count_active')

bonuses_li.forEach(li => {
    li.addEventListener('click', () => {
        bonuses_btns.forEach(btn_rem => { btn_rem.classList.remove('my-bonuses__link_active') })
        li.querySelector('.my-bonuses__link').classList.add('my-bonuses__link_active')
    })
})

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

let count = document.getElementById('count');
let shown = document.querySelector('.shown');

document.addEventListener('DOMContentLoaded', () => {
    shown.textContent = count.textContent;
})