let filterPriceSelect = document.querySelector('.filter_price_select')

let storeFilterBlock = document.querySelectorAll('.store_filter_block')

let storeFilterLi = document.querySelectorAll('.store_filter_li')


let storeSearchAuthor = document.querySelector('.store_search_author')

let storeProductsReset = document.querySelector('.store_products_reset')




document.querySelector(".store_filter_price input").oninput = function() {
    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #5DA6CF 0%, #5DA6CF ' + value + '%, #E8E8E8 ' + value + '%, #E8E8E8 100%)'
    filterPriceSelect.style.left = `calc(${value + '%'} - ${filterPriceSelect.offsetWidth /3.5 + 'px'})`
    filterPriceSelect.innerText = `${this.value + ' ₽'}`
}

storeFilterBlock.forEach(block => {
    block.addEventListener('click', () => {
        if (block.querySelector('.store_filter_ul').clientHeight === 0) {
            block.querySelector('.store_filter_ul').style.height = "calc(48px * 3)"
            block.querySelector('.store_filter_title').classList.add('filter_title_active')
        } else {
            block.querySelector('.store_filter_ul').style.height = "0"
            block.querySelector('.store_filter_title').classList.remove('filter_title_active')
        }
    })
})

storeFilterLi.forEach(li => {
    li.addEventListener('click', (e) => {
        e.stopPropagation()
        if (li.querySelector('.store_filter_check').classList.contains('chexkbox_active')) {
            li.querySelector('.store_filter_check').classList.remove('chexkbox_active')
        } else {
            li.querySelector('.store_filter_check').classList.add('chexkbox_active')
        }

    })
})

storeSearchAuthor.addEventListener('click', (e) => {
    e.stopPropagation()
})

storeProductsReset.addEventListener('click', () => {
    storeFilterLi.forEach(li => { li.querySelector('.store_filter_check').classList.remove('chexkbox_active') })
    storeFilterBlock.forEach(block => {
        block.querySelector('.store_filter_ul').style.height = "0"
        block.querySelector('.store_filter_title').classList.remove('filter_title_active')
    })
})