class Hangman { 
    constructor(word, guessesNumber) {
        this.word = word.toLowerCase().split('')
        this.numberOfGuesses = guessesNumber
        this.guessesMade = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzleWord = ''

        this.word.forEach((letter) => {
            if (this.guessesMade.includes(letter) || letter === ' ') {
                puzzleWord += letter
            } else {
                puzzleWord += '*'
            }
        })

        return puzzleWord
    }
    makeGuess(guess) {
        const isUnique = !this.guessesMade.includes(guess.toLowerCase())
        const isWrong = !this.word.includes(guess.toLowerCase())

        if (this.status !== 'playing') {
            return
        }

        if (isUnique) {
            this.guessesMade = [...this.guessesMade, guess]
        }

        if (isWrong && isUnique) {
            this.numberOfGuesses--                                             
        }

        this.reportStatus()
    }
    reportStatus () {
        let finished = true

        this.word.forEach((letter) => {
            if (this.guessesMade.includes(letter) || letter === ' ') {
    
            } else {
                finished = false
            }
        })
        
        if (this.numberOfGuesses < 1) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Remaining guesses: ${this.numberOfGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`   
        } else {                                                      
            return 'Well done! You guessed the word! :)'              
        }    
    }
}

export { Hangman as default }