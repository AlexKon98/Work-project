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