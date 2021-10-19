var canvas = document.getElementById('diagram');
var ctx = canvas.getContext('2d');

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
let headerStartStep = document.querySelector('.header_start_step')
let headerStartTask = document.querySelector('.header_start_task')
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
        headerStartTask.innerHTML = task[lists]
        learnFootertStep.innerHTML = lists + 1
        headerStartStep.innerHTML = `Шаг ${lists + 1}`
        if (learn[lists] === 'learn_six') {
            document.querySelector('.learn_header_prosent').classList.add('my_bonuses_count_active')
        }
        document.querySelector(`.${learn[lists]}`).classList.add('learn_step')
    }
})

batnBack.addEventListener('click', (e) => {
    if (lists > 0) {
        document.querySelector(`.${learn[lists]}`).classList.remove('learn_step')
        lists--
        headerStartTask.innerHTML = task[lists]
        learnFootertStep.innerHTML = lists + 1
        headerStartStep.innerHTML = `Шаг ${lists + 1}`
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
        e.dataTransfer.setData('src', img_block.innerHTML)
    }

    text_block.ondragstart = (e) => {
        five_text = text_block
        e.dataTransfer.setData('textt', text_block.innerHTML)
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