const input = document.querySelector('input')
const btn = document.querySelector('.btn')
const restart = document.querySelector('.restart')
const out = document.querySelector('#out')

const randNum = Math.random() * 10 + 1
const random = Math.floor(randNum)
console.log(random)

function game() {
    const answer = +input.value

    if (isNaN(answer)) {
        out.innerText = 'Введите только число'
        out.style.color = 'red'
    }

    else if (answer == '') {
        out.innerText = 'Заполнитье число'
        out.style.color = 'red'
    }

    else if (answer > 10 || answer < 1){
        out.innerText = 'Введите число только с 1 до 10'
        out.style.color = 'red'
    }

    else if (random > answer) {
        out.innerText = 'Чуть меньше'
        out.style.color = 'yellow'
    }

    else if (random < answer) {
        out.innerText = 'Чуть Больше'
        out.style.color = 'yellow'
    }

    else {
        out.innerText = 'Поздравляем вы отгадали число ' + random
        out.style.color = '#6ab04c'
        restart.style.display = 'inline-block'
        btn.style.display = 'none'
    }

    input.value = ''
}

function reload() {
    document.location.reload()
}

btn.onclick = game
restart.onclick = reload