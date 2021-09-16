const getPuzzle = async () => {
    const puzzlePromise = await fetch('//puzzle.mead.io/puzzle?wordCount=2')
    
    if (puzzlePromise.status === 200) {
        const dataPromise = await puzzlePromise.json()
        return dataPromise.puzzle
    } else {
        throw new Error('Response was not valid')
    }
}    

export { getPuzzle as default }