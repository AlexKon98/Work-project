let tabs = document.querySelectorAll('.your-bonuses__link');
let swipeContent = document.querySelectorAll('.swipe-content-active');


tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        const path = event.currentTarget.dataset.path;
        swipeContent.forEach((tabContent) => {
            tabContent.classList.remove('your-bonuses__main-list');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('your-bonuses__main-list');
    });
});


let bonuses_btns = document.querySelectorAll('.my-bonuses__link')
let bonuses_li = document.querySelectorAll('.my-bonuses__item')
let countHeart = document.querySelector('.my_bonuses_count')
let bonusesTitle = document.querySelector('.my-bonuses__heading')



bonuses_li.forEach(li => {
    li.addEventListener('click', () => {
        bonuses_btns.forEach(btn_rem => { btn_rem.classList.remove('my-bonuses__link_active') })
        countHeart.classList.remove('my_bonuses_count_active')
        li.querySelector('.my-bonuses__link').classList.add('my-bonuses__link_active')
        if (li.querySelector('.my_bonuses_count')) {
            countHeart.classList.add('my_bonuses_count_active')
        }
    })
})


tabs.forEach((active) => {
    active.addEventListener('click', () => {
        tabs.forEach((item) => {
            item.classList.remove('your-bonuses__link_active')
        });
        active.classList.add('your-bonuses__link_active');
    });
});