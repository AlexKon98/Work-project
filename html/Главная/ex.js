let sliderLeft = document.querySelector('.reviews_blocks_left')
let sliderRight = document.querySelector('.reviews_blocks_right')
let carousel = document.querySelector('.reviews_blocks_carousel')
let arrBlocks = document.querySelectorAll('.reviews_block')
let sliderWindow = document.querySelector('.reviews_blocks_window')

let slider_clicks = 0

let windWidth = sliderWindow.clientWidth

arrBlocks.forEach(block => block.style.width = (windWidth - 50) / 3 + 'px')




let goRig = () => {
    if (arrBlocks.length - 3 > slider_clicks) {
        slider_clicks += 1
        carousel.style.left = `calc((((${windWidth + 'px'} - 50px) / 3) * ${-slider_clicks}) - ( 25px * ${slider_clicks})`
    }
}

let goLeft = () => {
    if (slider_clicks !== 0) {
        slider_clicks -= 1
        carousel.style.left = `calc((((${windWidth + 'px'} - 50px) / 3) * ${-slider_clicks}) - ( 25px * ${slider_clicks})`
    }
}



sliderRight.addEventListener('click', () => { goRig() })


sliderLeft.addEventListener('click', () => { goLeft() })

window.addEventListener('resize', () => {
    windWidth = sliderWindow.clientWidth
    arrBlocks.forEach(block => block.style.width = (windWidth - 50) / 3 + 'px')
    carousel.style.left = `calc((((${windWidth + 'px'} - 50px) / 3) * ${-slider_clicks}) - ( 25px * ${slider_clicks})`
})