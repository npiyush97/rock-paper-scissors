let userSelect = '', computerSelect = ''
const gameContainer = document.querySelector('.game')
const nextStage = document.querySelector('.after-select')
let val
const pre = () => {
    let userScore = document.querySelector('.user-score')
    if (localStorage.getItem('user-score')) {
        val = localStorage.getItem('user-score')
    }
    else {
        val = 0
    }
    userScore.textContent = val
    console.log(val)
}
pre()
gameContainer.addEventListener('click', (e) => {
    console.log(val)
    userSelect = (e.target.classList.value)
    gameContainer.style.display = 'none'
    nextStage.style.display = 'flex'
    const parentContainer = document.querySelector('.user-picked')
    parentContainer.classList = ''
    parentContainer.classList = `user-picked ${userSelect}-container`
    parentContainer.childNodes.forEach(x => {
        if (x.nodeName === 'BUTTON') {
            x.classList = ''
            x.classList = userSelect
        }
    })
    computer()
})


function computer() {
    setTimeout(() => {
        const options = ['paper', 'scissors', 'rock']
        let randomPick = Math.floor(Math.random() * options.length)
        computerSelect = options[randomPick]
        const parentContainer = document.querySelector('.computer-pick')
        parentContainer.classList = ''
        parentContainer.classList = `computer-pick ${computerSelect}-container`
        parentContainer.childNodes.forEach(x => {
            if (x.nodeName === 'BUTTON') {
                x.classList = ''
                x.classList = computerSelect
            }
        })
        checkResult()
    }, 2000);
}

function checkResult() {
    const result = document.querySelector('.game-result')
    result.style.display = 'flex'
    const gameResult = document.querySelector('.result')
    gameResult.textContent = ''
    if (userSelect === computerSelect) {
        gameResult.textContent = 'Game Draw'
        return
    }
    if (userSelect === 'paper' && computerSelect === 'rock') {
        gameResult.textContent = 'You Win'
        val++
        return
    }
    if (userSelect === 'paper' && computerSelect === 'scissors') {
        gameResult.textContent = 'You Lose'
        val--
        return
    }
    if (userSelect === 'rock' && computerSelect === 'paper') {
        gameResult.textContent = 'You Lose'
        val--
        return
    }
    if (userSelect === 'rock' && computerSelect === 'scissors') {
        gameResult.textContent = 'You Won'
        val++
        return
    }
    if (userSelect === 'scissors' && computerSelect === 'rock') {
        gameResult.textContent = 'You Win'
        val++
        return
    }
    if (userSelect === 'scissors' && computerSelect === 'paper') {
        gameResult.textContent = 'You Lose'
        val--
        return
    }
}

const nxtGame = document.querySelector('next-game')

nextStage.addEventListener('click', () => {
    const gameResult = document.querySelector('.result')
    gameResult.textContent = ''
    nextStage.style.display = 'none'
    gameContainer.style.display = 'flex'
    userSelect = ''
    computerSelect = ''
    const userContainer = document.querySelector('.user-picked')
    const computerContainer = document.querySelector('.computer-pick')
    userContainer.classList = [userContainer.classList].shift()
    computerContainer.classList = [computerContainer.classList].shift()
    userContainer.childNodes.forEach(x => {
        if (x.nodeName === 'BUTTON') {
            x.classList = ''
            x.classList = 'empty-logo'
        }
    })
    computerContainer.childNodes.forEach(x => {
        if (x.nodeName === 'BUTTON') {
            x.classList = ''
            x.classList = 'empty-logo'
        }
    })
    save()
})

function save() {
    console.log('save', val)
    localStorage.setItem('user-score', val)
    pre()
}

const rulesModal = document.querySelector('.rules')
const modal = document.querySelector('.modal')

rulesModal.addEventListener('click', () => {
    modal.style.display = 'flex'
})

const closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
})
