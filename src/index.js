import Hangman from './hangman'
import getPuzzle from './requests'

const puzzleEl = document.querySelector('#puzzle')
const remainingEl = document.querySelector('#guesses')
const buttonEl = document.querySelector('#reset')

let gameStart

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    
    gameStart.makeGuess(guess)
    renderToScreen()
})

const renderToScreen = () => {
    puzzleEl.innerHTML = ''
    
    gameStart.puzzle.split('').forEach((letter) => {
        const spanEl = document.createElement('span')
        spanEl.textContent = letter
        puzzleEl.appendChild(spanEl)
    })

    remainingEl.textContent = gameStart.statusMessage
}

const startGame = async () => {
    const data = await getPuzzle()
    gameStart = new Hangman(data, 5)
    renderToScreen()
}

buttonEl.addEventListener('click', startGame)         

startGame()