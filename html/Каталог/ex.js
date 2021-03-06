let filterPriceSelect = document.querySelector('.filter_price_select')
let storeFilterBlock = document.querySelectorAll('.store_filter_block')
let storeFilterLi = document.querySelectorAll('.store_filter_li')
let storeSearchAuthor = document.querySelector('.store_search_author')
let storeProductsReset = document.querySelector('.store_products_reset')
let menuBtn = document.querySelector('.menu__btn');
let catalog = document.querySelector('.catalog_store_filter');
let filter = document.querySelector('.menu__special-btn');
let apply = document.querySelector('.store_filter_btn');
let closed = document.querySelector('.menu__close');
let catalogNew = document.querySelector('.catalog_store_filter');
let filterNew = document.querySelector('.fixed');

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
filter.addEventListener('click', () => {
    catalog.style.left = '0';
    filterNew.style.display = 'block';
})
apply.addEventListener('click', () => {
    catalog.style.left = '-275px';
    filterNew.style.display = 'none';
})
closed.addEventListener('click', () => {
    catalog.style.left = '-275px';
    filterNew.style.display = 'none';
})