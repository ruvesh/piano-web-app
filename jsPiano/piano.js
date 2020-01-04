
const BLACK_KEY_KB_BUTTONS = ['s','d','g','h','j']
const WHITE_KEY_KB_BUTTONS = ['z','x','c','v','b','n','m']


const keys = document.querySelectorAll('.key')

const blackKeys = document.querySelectorAll('.key.black')
const whiteKeys = document.querySelectorAll('.key.white')



keys.forEach(clickedKey => {
    clickedKey.addEventListener('click', () => playTheNote(clickedKey))
})

function playTheNote(key) {
    const correspondingAudio = document.getElementById(key.dataset.note)
    correspondingAudio.currentTime = 0
    correspondingAudio.play()
    key.classList.add('active')
    correspondingAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

document.addEventListener('keydown', event => {
    if(event.repeat) 
        return
    const pressedKey = event.key
    const whiteKeyIndex = WHITE_KEY_KB_BUTTONS.indexOf(pressedKey)
    const blackKeyIndex = BLACK_KEY_KB_BUTTONS.indexOf(pressedKey)
    
   if(whiteKeyIndex > -1) 
        playTheNote(whiteKeys[whiteKeyIndex])
   if(blackKeyIndex > -1) 
        playTheNote(blackKeys[blackKeyIndex])
})