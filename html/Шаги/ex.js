function modileBlock() {
    if (window.innerWidth < window.innerHeight) {
        document.getElementById('modile_block').style.display = 'block';
    } else {
        document.getElementById('modile_block').style.display = 'none';
    }
}

modileBlock();

window.addEventListener("resize", modileBlock, false);

var canvas = document.getElementsByClassName('diagram');
var ctx = canvas[0].getContext('2d');

let correct_arr = [
    [0, '0%'],
    [0.5, '25%'],
    [1, '50%'],
    [1.5, '75%'],
    [2, '100%']
]

ctx.beginPath();
ctx.strokeStyle = '#DDDDDD'
ctx.lineWidth = 14
ctx.arc(40, 40, 30, 0, Math.PI * 2, false);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = '#15C227'
ctx.lineWidth = 14
ctx.arc(40, 40, 30, -Math.PI / 2, (-Math.PI / 2 + Math.PI * correct_arr[0][0]), false);
ctx.stroke();

ctx.font = "16px Montserrat";
ctx.textAlign = "center";
ctx.fillText(correct_arr[0][1], 40, 45);

let five_progress = (index) => {
    ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
    ctx.beginPath();
    ctx.strokeStyle = '#DDDDDD'
    ctx.lineWidth = 14
    ctx.arc(40, 40, 30, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#15C227'
    ctx.lineWidth = 14
    ctx.arc(40, 40, 30, -Math.PI / 2, (-Math.PI / 2 + Math.PI * correct_arr[index][0]), false);
    ctx.stroke();

    ctx.font = "16px Montserrat";
    ctx.textAlign = "center";
    ctx.fillText(correct_arr[index][1], 40, 45);
}

let poem_one = [
    [
        ['Буря мглою небо кроет,'],
        ['Вихри снежные крутя;'],
        ['То, как зверь, она завоет,'],
        ['То заплачет, как дитя,']
    ],
    [
        ['То по кровле обветшалой'],
        ['Вдруг соломой зашумит,'],
        ['То, как путник запоздалый,'],
        ['К нам в окошко застучит.']
    ],
    [
        ['Буря мглою небо кроет,'],
        ['Вихри снежные крутя;'],
        ['То, как зверь, она завоет,'],
        ['То заплачет, как дитя,']
    ],
    [
        ['То по кровле обветшалой'],
        ['Вдруг соломой зашумит,'],
        ['То, как путник запоздалый,'],
        ['К нам в окошко застучит.']
    ]
]

let mixarr = (arr) => {
    return arr.map(i => [Math.random(), i]).sort().map(i => i[1])
}

let word_prosent = (pros, len) => {
    return Math.round((len / 100) * pros)
}


let poem_shadow = (poem, prosent, length, nums) => {
    let inner = ''
    let iter = 0
    nums = mixarr(nums)
    poem.forEach(ch => {
        ch.forEach(s => {
            inner += '<p>'
            s.toString().split(' ').forEach(l => {
                nums.slice(0, word_prosent(prosent, length)).includes(iter) ? inner += `<span>${l}</span> ` : inner += `${l} `
                iter++
            })
            inner += '</p>'
        })
        inner += '<br>'
    })
    return inner
}

let HeaderProsentNumbers = document.querySelectorAll('.header_prosent_numbers div')
let LearnSixContent = document.querySelector('.learn_six_content')
let prosentProgress = document.querySelector('.learn_header_prosent progress')
let learnFootertStep = document.querySelector('.learn_footert_step')
let headerStartStep = document.querySelectorAll('.header_start_step')
let headerStartTask = document.querySelectorAll('.header_start_task')
let len = 0
let arr_nums = []
let user_prosent = 0


poem_one.forEach(ch => ch.forEach(s => s.toString().split(' ').forEach(l => len++)))
for (let index = 0; index < len; index++) {
    arr_nums.push(index)
}


LearnSixContent.innerHTML = poem_shadow(poem_one, 0, len, arr_nums)


HeaderProsentNumbers.forEach(num => num.addEventListener('click', () => {
    user_prosent = Number(num.textContent)
    prosentProgress.value = user_prosent
    LearnSixContent.innerHTML = poem_shadow(poem_one, user_prosent, len, arr_nums)
}))


let batnBack = document.querySelector('.learn_footert_back')
let batnFurther = document.querySelector('.learn_footert_further')
lists = 0

let learn = ['learn_one', 'learn_two', 'learn_three', 'learn_four', 'learn_five', 'learn_six']
let task = [
    'Прослушать стихотворение не менее 3 раз.',
    'Прочитать стихотворение самостоятельно с выражением не менее 3 раз.',
    'Прочитать самостотельно разбор стихотворения.',
    '<div>1. Поочередно прослушайте озвучку к каждой картинке повторяя за диктором, пока не появится устойчивых ассоциативных связей с изображениями.</div><div>2. После этого нужно прочитать текст четверостишья не менее 5 раз.</div>',
    'Расставьте изображение и текст в правильном порядке перетягивая его мышкой. Повторите упраждение 3 раза.',
    'Прочитать стихотворение самостотельно с выражением не менее 3 раз.'
]

batnFurther.addEventListener('click', () => {
    if (lists + 1 < learn.length) {
        document.querySelector(`.${learn[lists]}`).classList.remove('learn_step')
        lists++
        headerStartTask.forEach(tas => tas.innerHTML = task[lists])
        learnFootertStep.innerHTML = lists + 1
        headerStartStep.forEach(step => step.innerHTML = `Шаг ${lists + 1}`)
        if (learn[lists] === 'learn_six') {
            document.querySelector('.learn_header_prosent').classList.add('my_bonuses_count_active')
        }
        document.querySelector(`.${learn[lists]}`).classList.add('learn_step')
        window.scrollTo(0, 0)
    }
})

batnBack.addEventListener('click', (e) => {
    if (lists > 0) {
        document.querySelector(`.${learn[lists]}`).classList.remove('learn_step')
        lists--
        headerStartTask.forEach(tas => tas.innerHTML = task[lists])
        learnFootertStep.innerHTML = lists + 1
        headerStartStep.forEach(step => step.innerHTML = `Шаг ${lists + 1}`)
        if (learn[lists] !== 'learn_six') {
            document.querySelector('.learn_header_prosent').classList.remove('my_bonuses_count_active')
        }
        document.querySelector(`.${learn[lists]}`).classList.add('learn_step')
    }
})


let five_contents = document.querySelectorAll('.learn_five_img_text')
let learnFiveBlock = document.querySelectorAll('.learn_five_block')
let five_content
let five_img
let five_text


let examination = () => {
    let correct_count = 0
    learnFiveBlock.forEach(lock_block => {
        lock_block.querySelectorAll('.quatrain_1').length === 3 ? correct_count++ : correct_count = correct_count
        lock_block.querySelectorAll('.quatrain_2').length === 3 ? correct_count++ : correct_count = correct_count
        lock_block.querySelectorAll('.quatrain_3').length === 3 ? correct_count++ : correct_count = correct_count
        lock_block.querySelectorAll('.quatrain_4').length === 3 ? correct_count++ : correct_count = correct_count
    })
    five_progress(correct_count)
}


let cur_img_block = null,
    cur_text_block = null;

five_contents.forEach(Img_text => {
    let img_block = Img_text.querySelector('.learn_block_img')
    let text_block = Img_text.querySelector('.learn_block_text')
    img_block.ondragover = (e) => { e.preventDefault() }
    text_block.ondragover = (e) => { e.preventDefault() }

    img_block.ondrop = (e) => {
        if (e.dataTransfer.getData('src')) {
            five_img.innerHTML = img_block.innerHTML
            img_block.innerHTML = e.dataTransfer.getData('src')
            e.dataTransfer.setData('src', '')
            examination()
        }
    }

    img_block.ondragstart = (e) => {
        five_img = img_block
        console.log(e);
        e.dataTransfer.setData('src', img_block.innerHTML)
    }

    img_block.ontouchstart = (e) => {
        if (!cur_img_block) {
            cur_img_block = img_block
            img_block.classList.add('active')
        } else {
            let buffer = img_block.innerHTML
            img_block.innerHTML = cur_img_block.innerHTML
            cur_img_block.innerHTML = buffer
            cur_img_block.classList.remove('active')
            cur_img_block = null
            examination()
        }
    }

    text_block.ondragstart = (e) => {
        five_text = text_block
        e.dataTransfer.setData('textt', text_block.innerHTML)
    }

    text_block.ontouchstart = (e) => {
        if (!cur_text_block) {
            cur_text_block = text_block
            text_block.classList.add('active')
        } else {
            let buffer = text_block.innerHTML
            text_block.innerHTML = cur_text_block.innerHTML
            cur_text_block.innerHTML = buffer
            cur_text_block.classList.remove('active')
            cur_text_block = null
            examination()
        }
    }

    text_block.ondrop = (e) => {
        if (e.dataTransfer.getData('textt')) {
            five_text.innerHTML = text_block.innerHTML
            text_block.innerHTML = e.dataTransfer.getData('textt')
            e.dataTransfer.setData('textt', '')
            examination()
        }
    }
})



let svgPauseBig = `<path d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z" stroke="url(#paint0_linear_643:882)" stroke-width="2"/>
<line x1="27.5" y1="24.5" x2="27.5" y2="41.5" stroke="url(#paint1_linear_643:882)" stroke-width="3" stroke-linecap="round"/>
<line x1="35.5" y1="24.5" x2="35.5" y2="41.5" stroke="url(#paint2_linear_643:882)" stroke-width="3" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_643:882" x1="1" y1="-32.5833" x2="14.1176" y2="128.207" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint1_linear_643:882" x1="26.5417" y1="23" x2="23.931" y2="23.0106" gradientUnits="userSpaceOnUse">
<stop stop-color="#60A7CE"/>
<stop offset="1" stop-color="#6ACAFF"/>
</linearGradient>
<linearGradient id="paint2_linear_643:882" x1="34.5417" y1="23" x2="31.931" y2="23.0106" gradientUnits="userSpaceOnUse">
<stop stop-color="#60A7CE"/>
<stop offset="1" stop-color="#6ACAFF"/>
</linearGradient>
</defs>`

let svgPlayBig = `<path d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z" stroke="url(#paint0_linear_616:1191)" stroke-width="2"/>
<path d="M26.5469 22.2769L43.8673 32.2769L26.5469 42.2769V22.2769Z" stroke="url(#paint1_linear_616:1191)" stroke-width="1.5"/>
<defs>
<linearGradient id="paint0_linear_616:1191" x1="1" y1="-32.5833" x2="14.1176" y2="128.207" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint1_linear_616:1191" x1="26.5469" y1="11.4435" x2="31.4223" y2="63.1975" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
</defs>`

let svgPlaySmall = `<path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="url(#paint0_linear_664:702)" stroke-width="1.5"/>
<path d="M7.17969 6.14755L11.3701 8.56691L7.17969 10.9863V6.14755Z" stroke="url(#paint1_linear_664:702)"/>
<defs>
<linearGradient id="paint0_linear_664:702" x1="1" y1="-7.125" x2="4.17362" y2="31.776" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint1_linear_664:702" x1="7.17969" y1="3.52658" x2="8.35921" y2="16.0477" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
</defs>`


let svgPauseSmall = `<path d="M32 63C49.1208 63 63 49.1208 63 32C63 14.8792 49.1208 1 32 1C14.8792 1 1 14.8792 1 32C1 49.1208 14.8792 63 32 63Z" stroke="url(#paint0_linear_643:882)" stroke-width="2"/>
<line x1="27.5" y1="24.5" x2="27.5" y2="41.5" stroke="url(#paint1_linear_643:882)" stroke-width="3" stroke-linecap="round"/>
<line x1="35.5" y1="24.5" x2="35.5" y2="41.5" stroke="url(#paint2_linear_643:882)" stroke-width="3" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_643:882" x1="1" y1="-32.5833" x2="14.1176" y2="128.207" gradientUnits="userSpaceOnUse">
<stop stop-color="#7BC1E8"/>
<stop offset="1" stop-color="#276F97"/>
</linearGradient>
<linearGradient id="paint1_linear_643:882" x1="26.5417" y1="23" x2="23.931" y2="23.0106" gradientUnits="userSpaceOnUse">
<stop stop-color="#60A7CE"/>
<stop offset="1" stop-color="#6ACAFF"/>
</linearGradient>
<linearGradient id="paint2_linear_643:882" x1="34.5417" y1="23" x2="31.931" y2="23.0106" gradientUnits="userSpaceOnUse">
<stop stop-color="#60A7CE"/>
<stop offset="1" stop-color="#6ACAFF"/>
</linearGradient>
</defs>`

let idOnePlayer = document.getElementById('one_player')
let clOnePlayer = document.querySelector('.one_player')
let clOneDown = document.querySelector('.one_down')
let clOneUp = document.querySelector('.one_up')
let onePlay = false

clOnePlayer.addEventListener('click', () => {
    if (!onePlay) {
        idOnePlayer.play()
        onePlay = !onePlay
        clOnePlayer.innerHTML = svgPauseBig
    } else {
        idOnePlayer.pause()
        onePlay = !onePlay
        clOnePlayer.innerHTML = svgPlayBig
    }
})

clOneDown.addEventListener('click', () => {
    idOnePlayer.play()
    idOnePlayer.currentTime -= 10
    onePlay = true
    clOnePlayer.innerHTML = svgPauseBig
})

clOneUp.addEventListener('click', () => {
    idOnePlayer.play()
    idOnePlayer.currentTime += 10
    onePlay = true
    clOnePlayer.innerHTML = svgPauseBig
})


let learnFourBlock = document.querySelectorAll('.learn_four_block')

learnFourBlock.forEach(b => {
    b.addEventListener('click', () => {
        if (b.querySelector('svg').viewBox.animVal.width === 64) {
            b.querySelector('svg').innerHTML = svgPlaySmall
            b.querySelector('svg').setAttribute('viewBox', '0 0 17 17')
            b.querySelector('.four_player').pause()
        } else {
            learnFourBlock.forEach(bb => {
                bb.querySelector('svg').innerHTML = svgPlaySmall
                bb.querySelector('svg').setAttribute('viewBox', '0 0 17 17')
                bb.querySelector('.four_player').pause()
            })
            b.querySelector('svg').innerHTML = svgPauseSmall
            b.querySelector('svg').setAttribute('viewBox', '0 0 64 64')
            b.querySelector('.four_player').play()
        }
    })
})

let learnBlockListen = document.querySelector('.learn_six .learn_block_listen')
learnBlockListen.addEventListener('click', () => {
    if (learnBlockListen.querySelector('svg').viewBox.animVal.width === 64) {
        learnBlockListen.querySelector('svg').innerHTML = svgPlaySmall
        learnBlockListen.querySelector('svg').setAttribute('viewBox', '0 0 17 17')
        learnBlockListen.querySelector('audio').pause()
    } else {
        learnBlockListen.querySelector('svg').innerHTML = svgPauseSmall
        learnBlockListen.querySelector('svg').setAttribute('viewBox', '0 0 64 64')
        learnBlockListen.querySelector('audio').play()
    }
})