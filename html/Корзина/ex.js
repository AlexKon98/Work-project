let bonuses_btns = document.querySelectorAll('.my-bonuses__link')
let bonuses_li = document.querySelectorAll('.my-bonuses__item')
let countHeart = document.querySelector('.my_bonuses_count')
let bonusesTitle = document.querySelector('.my-bonuses__heading')

let checks = document.querySelectorAll('.store_filter_check')

let blockChoiceAll = document.querySelector('.block_choice_all')
let blockChoiceDelete = document.querySelector('.block_choice_delete')

let blockChoiceCheck = document.querySelector('.block_choice_check')



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

checks.forEach(check => check.addEventListener('click', () => {
    if (check.classList.contains('chexkbox_active')) {
        check.classList.remove('chexkbox_active')
        blockChoiceCheck.classList.remove('chexkbox_active')
    } else {
        check.classList.add('chexkbox_active')
    }
}))


blockChoiceAll.addEventListener('click', () => {
    blockChoiceCheck.classList.add('chexkbox_active')
    checks.forEach(check => check.classList.add('chexkbox_active'))
})


blockChoiceDelete.addEventListener('click', () => {
    blockChoiceCheck.classList.remove('chexkbox_active')
    checks.forEach(check => check.classList.remove('chexkbox_active'))
})