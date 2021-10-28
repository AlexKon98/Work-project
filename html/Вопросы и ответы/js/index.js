let accordionItem = document.querySelectorAll('.faq__accordion__item');
let menuBtn = document.querySelector('.menu__btn');

accordionItem.forEach((item) => {
  item.addEventListener('click', () => {
    let trigger = item.classList.contains('faq__accordion__item-active');
    accordionItem.forEach((object) => {
      object.classList.remove('faq__accordion__item-active');
      object.querySelector('.accordion__heading').classList.remove('accordion__heading-active');
    });
    if (!trigger) {
      item.classList.add('faq__accordion__item-active');
      item.querySelector('.accordion__heading').classList.add('accordion__heading-active');
    }
  });
});


menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open-menu');
  if (menuBtn.classList.contains('open-menu')) {
    menuBtn.innerHTML = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.853 1.14697L1.00002 25" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.14746 1L25.0005 24.853" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  } else {
    menuBtn.innerHTML = `<svg width="32" height="24" viewbox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 11.9092H31" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 1H31" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 22.8184H31" stroke="#276F97" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  }
})